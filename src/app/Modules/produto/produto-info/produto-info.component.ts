import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { utilsBr } from 'js-brasil';
import { validate_currency } from 'js-brasil/src/validate';
import { NgBrDirectives } from 'ng-brazil';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/core/model/Cliente';
import { Pedido } from 'src/app/core/model/Pedido';
import { Produto } from 'src/app/core/model/Produto';
import { BuscaCepService } from 'src/app/shared/Services/buscaCep/busca-cep.service';
import { FormataDadosAPIService } from 'src/app/shared/Services/formataDadosAPI/formata-dados-api.service';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { PedidoService } from 'src/app/shared/Services/Pedido/pedido.service';
import { ProdutoService } from 'src/app/shared/Services/Produto/produto.service';

@Component({
  selector: 'app-produto-info',
  templateUrl: './produto-info.component.html',
  styleUrls: ['./produto-info.component.scss'],
})
export class ProdutoInfoComponent implements OnInit {
  produto!: Produto;
  total!: number;
  customizado: boolean = false;
  tamanho!: string;
  cepLoading: boolean = false;

  formPedido!: FormGroup;
  MASKS = utilsBr.MASKS;

  arrValoresCep: string[] = ['10,0', '15,0', '5,0', '25,50', '0', '12,25'];

  constructor(
    private localStorageSvc: LocalStorageService,
    private router: Router,
    private fb: FormBuilder,
    private buscaCepSvc: BuscaCepService,
    private toastrSvc: ToastrService,
    private pedidSvc: PedidoService,
    private formataDadosApiSvc: FormataDadosAPIService
  ) {
    let cliente = this.localStorageSvc.getValue('cliente') as Cliente;
    this.produto = this.localStorageSvc.getValue('produto') as Produto;

    this.formPedido = this.fb.group({
      idCliente: [cliente.id, Validators.required],
      total: [this.total, Validators.required],
      desconto: [''],
      frete: ['', ],
      totalAPagar: [''],
      statusPedido: ['Em Aprovacao', Validators.required],
      statusPagamento: ['Aguardando Pagamento', Validators.required],
      statusEntrega: ['Em espera', Validators.required],
      tamanho: ["",],
      enderecoEntrega: ['', ],
      numero: ['',Validators.required],
      customizado: [''],
    });
  }

  ngOnInit(): void {}

  onBtnComprarCLick() {
    debugger
    let objPedido = Object.assign({}, this.formPedido.value) as Pedido;
    if (this.customizado) {
      let customValores = this.formPedido.controls['customizado'] as FormGroup;

      let altura = customValores.controls['altura'].value;
      let largura = customValores.controls['largura'].value;
      let cintura = customValores.controls['cintura'].value;
      let braco = customValores.controls['braco'].value;

      this.tamanho = `Altura: ${altura}; Largura: ${largura}; Cintura: ${cintura}; Braço: ${braco};`;
    }
    objPedido.tamanho = this.tamanho;

    objPedido.frete = this.formataDadosApiSvc.moedaParaAPI(
      this.formPedido.controls['frete'].value
    );
    objPedido.total = this.formataDadosApiSvc.moedaParaAPI(
      this.formPedido.controls['total'].value
    );
    objPedido.desconto = 0;
    objPedido.totalAPagar = 0;

    objPedido.enderecoEntrega +=
      ', ' + this.formPedido.controls['numero'].value;

      objPedido.produtos = [this.produto]

    this.pedidSvc.Create(objPedido).subscribe((x) => {
      this.toastrSvc.success('Pedido concluído', 'Sucesso');
    });
  }

  onbBtnCepCLick(cep: string) {
    this.cepLoading = true;
    cep = cep.replace('-', '').replace('.', '').replace('.', '');
    this.buscaCepSvc.getCep(cep).subscribe(
      (x) => {
        this.formPedido.controls['enderecoEntrega'].setValue(
          `${x.uf}, ${x.localidade}, ${x.bairro}, ${x.logradouro}`
        );

        let rdnNum = Math.floor(Math.random() * (5 - 0 + 1) + 1);
        rdnNum = 3;
        this.formPedido.controls['frete'].setValue(this.arrValoresCep[rdnNum]);
        this.calcularTotal();
      },
      (e) => {
        this.toastrSvc.error(
          'Erro ao buscar CEP, ' + e,
          'Status: ' + e.message
        );
        this.cepLoading = false;
      },
      () => (this.cepLoading = false)
    );
  }

  calcularTotal() {
    let frete = this.formPedido.controls['frete'].value;
    let precoProduto = this.produto.preco;

    let total = this.stringParaNumber(frete) + precoProduto;
    let totalFormated = this.numberParaString(total);

    this.formPedido.controls['total'].setValue(totalFormated);
    this.formPedido.controls['total'].setValue(totalFormated);
  }

  onTamanhoChange(value: any) {
    let group: FormGroup = this.fb.group({
      altura: ['', Validators.required],
      largura: ['', Validators.required],
      cintura: ['', Validators.required],
      braco: ['', Validators.required],
    });
    if (value == '1') {
      this.customizado = true;
      this.formPedido.controls['customizado'] = group;
    } else {
      this.customizado = false;
      this.tamanho = value;
    }
  }

  stringParaNumber(valor: string): number {
    let val =
      parseInt(valor.replace('.', '').replace(',', '').replace('R$ ', '')) /
      100;
    return val;
  }

  numberParaString(valor: number) {
    const { CURRENCYPipe } = NgBrDirectives;
    return new CURRENCYPipe().transform(valor, '2');

    // let val = parseInt(valor.replace('.', '').replace(',', '')) / 100;
    // return val;
  }
}

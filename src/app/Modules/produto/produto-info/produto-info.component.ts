import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { utilsBr } from 'js-brasil';
import { validate_currency } from 'js-brasil/src/validate';
import { NgBrDirectives } from 'ng-brazil';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/core/model/Cliente';
import { Produto } from 'src/app/core/model/Produto';
import { BuscaCepService } from 'src/app/shared/Services/buscaCep/busca-cep.service';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
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
    private produtoSvc: ProdutoService,
    private router: Router,
    private fb: FormBuilder,
    private buscaCepSvc: BuscaCepService,
    private toastrSvc: ToastrService
  ) {
    let cliente = this.localStorageSvc.getValue('cliente') as Cliente;
    this.produto = this.localStorageSvc.getValue('produto') as Produto;

    this.formPedido = this.fb.group({
      idCliente: [cliente.id, Validators.required],
      total: [this.total, Validators.required],
      desconto: ['', Validators.required],
      frete: ['', Validators.required],
      totalAPagar: ['', Validators.required],
      statusPedido: ['Em Aprovacao', Validators.required],
      statusPagamento: ['Aguardando Pagamento', Validators.required],
      statusEntrega: ['Em espera', Validators.required],
      tamanho: ['', Validators.required],
      enderecoEntrega: ['', Validators.required],
      numero: ['', Validators.required],
      customizado: [''],
    });
  }

  ngOnInit(): void {}

  onBtnComprarCLick() {
    let objPedido = Object.assign({}, this.formPedido.value);
    console.log(objPedido);
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
    let val = parseInt(valor.replace('.', '').replace(',', '').replace("R$ ",'')) / 100;
    return val;
  }

  numberParaString(valor:number) {
    const {CURRENCYPipe} = NgBrDirectives;
    return new CURRENCYPipe()
      .transform(valor, '2');
  
    // let val = parseInt(valor.replace('.', '').replace(',', '')) / 100;
    // return val;
  }
}

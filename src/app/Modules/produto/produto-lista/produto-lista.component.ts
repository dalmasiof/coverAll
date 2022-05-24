import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/core/model/Produto';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { ProdutoService } from 'src/app/shared/Services/Produto/produto.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.scss'],
})
export class ProdutoListaComponent implements OnInit {
  prodList: Produto[] = [];
  filteredList: Produto[] = [];

  valorPesquisa: string = '';
  generoFilter = '0';
  orderValue = '0';
  constructor(
    private localStorageSvc: LocalStorageService,
    private produtoSvc: ProdutoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProdutosList();
  }

  getProdutosList() {
    this.produtoSvc.GetList().subscribe((x) => {
      this.carregarLista(x);
      if (this.localStorageSvc.getValue('campoPesquisa')) {
        this.valorPesquisa = this.localStorageSvc.getValue('campoPesquisa');
        this.filtrarListaPorPesquisa();
      }
    });
  }

  carregarLista(prodList: Produto[]) {
    this.prodList = prodList;
    this.filteredList = Object.assign([], this.prodList);
  }

  filtrarListaPorPesquisa() {
    debugger;
    if (this.valorPesquisa == '') {
      this.filteredList = Object.assign([], this.prodList);
    }
    else{
      if (this.valorPesquisa) {
        this.filteredList = Object.assign(
          [],
          this.prodList.filter((x) => {
            return (
              x.descricao
                .toLowerCase()
                .indexOf(this.valorPesquisa.toLowerCase()) > 1
            );
          })
        );
      }
    }
  }

  filtarGenero() {
    let value = this.generoFilter;
    let controlVar = 0;
    if (this.valorPesquisa || this.valorPesquisa != '') controlVar = 1;

    if (value != '0') {
      if (controlVar == 1) {
        this.filteredList = Object.assign(
          [],
          this.filteredList.filter((x) => {
            return x.genero.toLowerCase() == value.toLowerCase();
          })
        );
      } else {
        this.filteredList = Object.assign(
          [],
          this.prodList.filter((x) => {
            return x.genero.toLowerCase() == value.toLowerCase();
          })
        );
      }
    }
    // if (this.orderValue != '0') this.ordernarPor(this.orderValue);
  }
  ordernarPor() {
    let value = this.orderValue;

    switch (value) {
      case '0':
        break;

      case '3':
        this.filteredList = this.filteredList.sort(this.compareAZ);
        break;

      case '4':
        this.filteredList = this.filteredList.sort(this.compareZA);

        break;

      case '2':
        this.filteredList = this.filteredList.sort(this.comparePrecoM);

        break;

      case '1':
        this.filteredList = this.filteredList.sort(this.comparePrecoMe);

        break;
    }
  }

  onGeneroSelectCHange(value: string) {
    this.generoFilter = value;
  }

  onInputChange(value: string) {
    this.valorPesquisa = value.toLowerCase();
  }

  onBtnPesquisaClick() {
    this.filtrarLista();
  }

  onOrderChange(value: string) {
    this.orderValue = value;
  }

  compareAZ(a: any, b: any) {
    if (a.descricao < b.descricao) {
      return -1;
    }
    if (a.descricao > b.descricao) {
      return 1;
    }
    return 0;
  }

  compareZA(a: any, b: any) {
    if (a.descricao > b.descricao) {
      return -1;
    }
    if (a.descricao < b.descricao) {
      return 1;
    }
    return 0;
  }

  comparePrecoM(a: any, b: any) {
    if (parseFloat(a.preco) < parseFloat(b.preco)) {
      return -1;
    }
    if (parseFloat(a.preco) > parseFloat(b.preco)) {
      return 1;
    }
    return 0;
  }

  comparePrecoMe(a: any, b: any) {
    if (parseFloat(a.preco) > parseFloat(b.preco)) {
      return -1;
    }
    if (parseFloat(a.preco) < parseFloat(b.preco)) {
      return 1;
    }
    return 0;
  }

  filtrarLista() {
    debugger;
    this.filtrarListaPorPesquisa();
    this.filtarGenero();
    this.ordernarPor();
  }

  onCardClick(produto: Produto) {
    this.localStorageSvc.setValue('produto', produto);

    this.router.navigateByUrl('produto/produtoInfo');
  }
}

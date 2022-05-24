import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/core/model/Produto';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { ProdutoService } from 'src/app/shared/Services/Produto/produto.service';

@Component({
  selector: 'app-produto-info',
  templateUrl: './produto-info.component.html',
  styleUrls: ['./produto-info.component.scss']
})
export class ProdutoInfoComponent implements OnInit {

  produto!:Produto

  constructor(  private localStorageSvc: LocalStorageService,
    private produtoSvc: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    this.produto = this.localStorageSvc.getValue('produto')
    console.log(this.produto)
  }

}

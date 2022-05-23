import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.scss']
})
export class ProdutoListaComponent implements OnInit {

  valorPesquisa:string = ""
  constructor(private localStorageSvc:LocalStorageService) {
    if(this.localStorageSvc.getValue('campoPesquisa')) 
      this.valorPesquisa = this.localStorageSvc.getValue('campoPesquisa')
  }

  ngOnInit(): void {
  }

}

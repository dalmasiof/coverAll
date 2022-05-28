import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private localStorageSvc:LocalStorageService, private router:Router) { }

  ngOnInit(): void {
    this.localStorageSvc.setValue('campoPesquisa',null);
  }

  onBtnPesquisaClick(value:string){
    this.localStorageSvc.setValue('campoPesquisa',value);
    this.router.navigateByUrl('produto/lista')
    value)
  }

}

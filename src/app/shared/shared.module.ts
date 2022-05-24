import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoginService } from './Services/Login/login.service';
import { LocalStorageService } from './Services/LocalStorage/local-storage.service';
import { ClienteService } from './Services/Cliente/cliente.service';
import { ProdutoModule } from '../Modules/produto/produto.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],providers:[LoginService,ClienteService,LocalStorageService,ProdutoModule]
})
export class SharedModule { }

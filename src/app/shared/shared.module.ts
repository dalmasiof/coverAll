import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoginService } from './Services/Login/login.service';
import { LocalStorageService } from './Services/LocalStorage/local-storage.service';
import { ClienteService } from './Services/Cliente/cliente.service';
import { ProdutoModule } from '../Modules/produto/produto.module';
import { BuscaCepService } from './Services/buscaCep/busca-cep.service';
import { PedidoService } from './Services/Pedido/pedido.service';
import { NgBrazil } from 'ng-brazil';
import { FormataDadosAPIService } from './Services/formataDadosAPI/formata-dados-api.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedRoutingModule,NgBrazil],
  providers: [
    LoginService,
    ClienteService,
    LocalStorageService,
    ProdutoModule,
    BuscaCepService,
    PedidoService,
    FormataDadosAPIService,
    
  ],
})
export class SharedModule {}

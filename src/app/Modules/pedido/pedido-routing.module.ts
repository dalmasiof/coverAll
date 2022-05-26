import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoInfoComponent } from './pedido-info/pedido-info.component';

const routes: Routes = [{path:"info",component:PedidoInfoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoInfoComponent } from './pedido-info/pedido-info.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PedidoInfoComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PedidoModule { }

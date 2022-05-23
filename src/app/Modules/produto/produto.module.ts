import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PrincipalComponent,
    ProdutoListaComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ProdutoModule { }

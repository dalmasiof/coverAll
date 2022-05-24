import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { ProdutoInfoComponent } from './produto-info/produto-info.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoService } from 'src/app/shared/Services/Produto/produto.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatRadioModule} from '@angular/material/radio';
import { MatDividerModule} from '@angular/material/divider';




@NgModule({
  declarations: [
    PrincipalComponent,
    ProdutoListaComponent,
    ProdutoInfoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatRippleModule,
    MatRadioModule,
    MatDividerModule
  ],providers:[
    ProdutoService
  ]
})
export class ProdutoModule { }

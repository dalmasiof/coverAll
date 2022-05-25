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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { utilsBr } from 'js-brasil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgBrazil } from 'ng-brazil';




@NgModule({
  declarations: [
    PrincipalComponent,
    ProdutoListaComponent,
    ProdutoInfoComponent
  ],
  imports: [
    ReactiveFormsModule,
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
    MatDividerModule,
    TextMaskModule,
    CustomFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    NgBrazil
  ],providers:[
    ProdutoService
  ]
})
export class ProdutoModule { }

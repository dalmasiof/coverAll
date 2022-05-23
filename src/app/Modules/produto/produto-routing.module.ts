import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';

const routes: Routes = [{path:'',component:PrincipalComponent},
{path:'lista',component:ProdutoListaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }

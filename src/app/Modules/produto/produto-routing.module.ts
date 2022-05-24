import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ProdutoInfoComponent } from './produto-info/produto-info.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';

const routes: Routes = [{path:'',component:PrincipalComponent},
{path:'lista',component:ProdutoListaComponent},
{path:'produtoInfo',component:ProdutoInfoComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }

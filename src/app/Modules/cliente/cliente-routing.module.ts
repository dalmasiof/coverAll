import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClienteCadComponent } from './cliente-cad/cliente-cad.component';
import { ClienteInfoComponent } from './cliente-info/cliente-info.component';

const routes: Routes = [{path:'',component:ClienteInfoComponent},{
  path:'lista',component:ClientListComponent
},
{path:'cadastro',component:ClienteCadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }

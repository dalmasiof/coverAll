import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteInfoComponent } from './cliente-info/cliente-info.component';

const routes: Routes = [{path:'',component:ClienteInfoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }

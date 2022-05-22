import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClienteCadComponent } from './cliente-cad/cliente-cad.component';
import { ClienteBaseComponent } from './cliente-info/cliente-base/cliente-base.component';
import { ClienteInfoComponent } from './cliente-info/cliente-info.component';
import { ClieteUpdateComponent } from './cliete-update/cliete-update.component';

const routes: Routes = [
  { path: '', component: ClienteBaseComponent },
  {
    path: 'lista',
    component: ClientListComponent,
  },
  { path: 'cadastro', component: ClienteCadComponent },
  { path: 'update', component: ClieteUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}

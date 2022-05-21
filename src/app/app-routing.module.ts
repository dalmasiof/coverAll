import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./Modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'cliente',
    loadChildren: () =>
      import('./Modules/cliente/cliente.module').then((m) => m.ClienteModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./Modules/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

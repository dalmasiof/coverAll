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
    path: 'produto',
    loadChildren: () =>
      import('./Modules/produto/produto.module').then((m) => m.ProdutoModule),
  },
  {
    path: 'pedido',
    loadChildren: () =>
      import('./Modules/pedido/pedido.module').then((m) => m.PedidoModule),
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

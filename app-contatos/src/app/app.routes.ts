import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'adicionar-contato',
    loadComponent: () => import('./pages/adicionar-contato/adicionar-contato.page').then(m => m.AdicionarContatoPage)
  },
  {
    path: 'listar-contatos',
    loadComponent: () => import('./pages/listar-contatos/listar-contatos.page').then(m => m.ListarContatosPage)
  }
];

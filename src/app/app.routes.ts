import { Routes } from '@angular/router';
import { HalamanutamaPage } from './halamanutama/halamanutama.page';
import { SuhuPage } from './halamanutama/suhu/suhu.page';
import { MassaPage } from './halamanutama/massa/massa.page';
import { JarakPage } from './halamanutama/jarak/jarak.page';
import { WaktuPage } from './halamanutama/waktu/waktu.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'halamanutama',
    loadComponent: () => import('./halamanutama/halamanutama.page').then( m => m.HalamanutamaPage)
  },
  {
    path: 'suhu',
    loadComponent: () => import('./halamanutama/suhu/suhu.page').then( m => m.SuhuPage)
  },
  {
    path: 'massa',
    loadComponent: () => import('./halamanutama/massa/massa.page').then( m => m.MassaPage)
  },
  {
    path: 'jarak',
    loadComponent: () => import('./halamanutama/jarak/jarak.page').then( m => m.JarakPage)
  },
  {
    path: 'waktu',
    loadComponent: () => import('./halamanutama/waktu/waktu.page').then( m => m.WaktuPage)
  },
];



import { Routes } from '@angular/router';
import { HomeComponent } from '../views/pages/home/home.component';
import { MainLayoutComponent } from '../views/shared/layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  { path: '**', redirectTo: '/404' },
];

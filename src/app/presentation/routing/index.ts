import { Routes } from '@angular/router';
import { HomeComponent } from '../views/pages/home/home.component';
import { MainLayoutComponent } from '../views/shared/layouts/main-layout/main-layout.component';
import { BasicLayoutComponent } from '../views/shared/layouts/basic-layout/basic-layout.component';
import { SignInComponent } from '../views/pages/auth/sign-in/sign-in.component';
import { SignUpComponent } from '../views/pages/auth/sign-up/sign-up.component';
import { UserDashboardComponent } from '../views/pages/user-dashboard/user-dashboard.component';
import { DiscoverComponent } from '../views/pages/discover/discover.component';
import { AuthGuardRoute } from '../guards/auth-guard-travel-agent';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'user-dashboard',
        component: UserDashboardComponent,
        canActivate: [AuthGuardRoute],
      },
      {
        path: 'discover',
        component: DiscoverComponent,
        canActivate: [AuthGuardRoute],
      },
    ],
  },
  {
    path: 'auth',
    component: BasicLayoutComponent,
    children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
    ],
  },
  { path: '**', redirectTo: '/404' },
];

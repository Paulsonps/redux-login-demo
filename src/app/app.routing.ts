import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from '../container/app-layout/app-layout.component';
import { AppLoginComponent } from '../container/app-login/app-login.component';

import { AppHomeComponent } from '../container/app-home/app-home.component';
import { AuthGuard } from './auth.gaurd';

const appRoutes: Routes = [
      { path: 'home', loadChildren: 'container/app-home/app-home.module#AppHomeModule', canActivate: [AuthGuard ] },
      { path: 'login', loadChildren: 'container/app-login/app-login.module#AppLoginModule'},
      {path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: '**', redirectTo: 'login'}
  ];



export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { enableTracing: false });

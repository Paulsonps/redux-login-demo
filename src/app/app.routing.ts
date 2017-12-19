import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppLoginComponent } from './app-login/app-login.component';

const appRoutes: Routes = [
      { path: 'home', loadChildren: 'app/app-home/app-home.module#AppHomeModule' },

      { path: '', component: AppLoginComponent}
  ];



export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { enableTracing: false });

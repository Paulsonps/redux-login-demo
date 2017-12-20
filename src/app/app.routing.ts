import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from '../container/app-layout/app-layout.component';
import { AppLoginComponent } from '../container/app-login/app-login.component';

import { AppHomeComponent } from '../container/app-home/app-home.component';

const appRoutes: Routes = [
      { path: 'home', loadChildren: 'container/app-home/app-home.module#AppHomeModule' },
      // { path: 'home', component: AppHomeComponent},
      { path: '', component: AppLoginComponent}
  ];



export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { enableTracing: false });

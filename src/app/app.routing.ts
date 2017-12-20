import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppLoginComponent } from './app-login/app-login.component';

import { AppHomeComponent } from './app-home/app-home.component';

const appRoutes: Routes = [
      { path: 'home', loadChildren: 'app/app-home/app-home.module#AppHomeModule' },

  // { path: 'home', component: AppHomeComponent},
      { path: '', component: AppLoginComponent}
// =======
// import { GuradService } from './gurad.service';

// const appRoutes: Routes = [
//       {path: '', pathMatch: 'full', redirectTo: 'login' },
//       { path: '**', redirectTo: 'login'},
//       { path: 'home',
//         loadChildren: '../app/app-home/app-home.module#AppHomeModule' },
//       { path: 'login',
//         loadChildren: '../app/app-login/app-login.module#AppLoginModule' }
// >>>>>>> 22ab4036c17d0933e807b3bce60d7b812908e639
  ];



export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { enableTracing: false });

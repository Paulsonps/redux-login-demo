import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutingModule } from './app.routing';

import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, CustomSerializer } from '../store/router.reducer';
import { AppLayoutComponent } from '../container/app-layout/app-layout.component';
import { AppLoginComponent } from '../container/app-login/app-login.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AppLoginModule } from '../container/app-login/app-login.module';
// import { LoginService } from '../store/login/login.service';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth.gaurd';
// import {HTTP_PROVIDERS} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    // AppLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppLoginModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    BrowserAnimationsModule,
    appRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],

  providers: [
    // LoginService,
    AuthGuard,
    {provide: RouterStateSerializer, useClass: CustomSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule { }

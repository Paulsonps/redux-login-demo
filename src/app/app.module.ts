import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from '../store/login/login.reducer';
import { AppLayoutComponent } from '../container/app-layout/app-layout.component';
import { AppLoginComponent } from '../container/app-login/app-login.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
// import { AppHomeModule } from '../container/app-home/app-home.module';
import { AppLoginModule } from '../container/app-login/app-login.module';
import { LoginEffects } from '../store/login/login.effect';
import { LoginService } from '../store/login/login.service';
import { HttpModule } from '@angular/http';
// import {HTTP_PROVIDERS} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({'products': loginReducer}),
    EffectsModule.forRoot([LoginEffects]),
    BrowserAnimationsModule,
    appRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],

  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

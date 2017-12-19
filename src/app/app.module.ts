import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from '../store/reducers/login.reducer';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AppHomeModule } from '../app/app-home/app-home.module';
import { AppLoginModule } from '../app/app-login/app-login.module';
import { LoginEffects } from '../store/effects/effects';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({'products': loginReducer}),
    EffectsModule.forRoot([LoginEffects]),
    BrowserAnimationsModule,
    appRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

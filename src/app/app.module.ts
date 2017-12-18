import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store/src/store_module';
import { reducers } from '../store/reducers/index';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppLoginComponent } from './app-login/app-login.component';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({'products': reducers}),
    BrowserAnimationsModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoginComponent } from './app-login.component';
import { AppLoginRoutingModule } from './app-login.routing';
import { LoginService } from '../../store/login/login.service';

@NgModule({
  imports: [
    AppLoginRoutingModule,
    FormsModule,
    CommonModule,
    AppLoginRoutingModule
  ],
  providers: [LoginService],
  declarations: [
    AppLoginComponent
  ]
})

export class AppLoginModule { }

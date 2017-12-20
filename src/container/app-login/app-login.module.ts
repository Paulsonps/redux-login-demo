import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from '../../store/login/login.reducer';
import { LoginEffects } from '../../store/login/login.effect';
import { AppLoginComponent } from './app-login.component';
import { AppLoginRoutingModule } from './app-login.routing';
import { LoginService } from '../../store/login/login.service';

@NgModule({
  imports: [
    AppLoginRoutingModule,
    FormsModule,
    CommonModule,
    // AppLoginRoutingModule,
    StoreModule.forFeature('products', loginReducer),
    EffectsModule.forFeature([LoginEffects]),

  ],
  providers: [LoginService],
  declarations: [
    AppLoginComponent
  ]
})

export class AppLoginModule { }

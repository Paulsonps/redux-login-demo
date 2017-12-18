import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store/src/store_module';
import { reducers } from '../store/reducers/index';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({'products': reducers}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

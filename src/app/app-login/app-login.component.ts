import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGIN_SUBMIT } from '../../store/actions/actions';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { LoginService } from '../../store/services/login.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
  pword: any;
  uname: any;
  userData$: Observable<any>;

  constructor(public store: Store<any>,
              public routes: Router,
              public service: LoginService) { }

  ngOnInit() {
  }

  login() {

    this.store.dispatch({
      type: LOGIN_SUBMIT,
      payload: {'username': this.uname, 'password': this.pword}
    });

    // get the loading state and redirected to home page
    this.userData$ = this.store.select('products');
  }
}

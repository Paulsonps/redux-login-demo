import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGIN_SUBMIT } from '../../store/actions/actions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
  pword: any;
  uname: any;

  constructor(public store: Store<any>) { }

  ngOnInit() {
  }

  login(username: any, password: any) {
    this.store.dispatch({
      type: LOGIN_SUBMIT,
      payload: {username: this.uname, password: this.pword}
    });
  }
}

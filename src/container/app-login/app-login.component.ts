import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGIN_SUBMIT } from '../../store/login/login.action';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { LoginService } from '../../store/login/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RootState } from '../../store';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  userData$: Observable<any>;
  form: FormGroup;
  constructor(public store: Store<RootState>,
              public routes: Router,
              public service: LoginService,
              public fb: FormBuilder) { }

              ngOnInit() {
                this.form = this.fb.group({
                  username: ['', Validators.required],
                  password: ['', Validators.required]
                });
              }

  login(data: any) {

    this.store.dispatch({
      type: LOGIN_SUBMIT,
      payload: {data}
    });
    this.service.login(data);

    // get the loading state and redirected to home page
    this.userData$ = this.store.select('products');
  }
}

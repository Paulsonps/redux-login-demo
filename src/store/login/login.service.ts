
import { EventEmitter, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './login.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    handleError: any;
    private loggedIn = new BehaviorSubject<boolean>(false);
    constructor(public _http: Http, public _router: Router ) { }

    getUserData() {
      return this._http.get('assets/db.json');
                        // .map(rs => rs.json());
    }
    get isLoggedIn() {
        return this.loggedIn.asObservable();
      }
    login(user: User) {
        if (user.username === 'admin' && user.password === 'admin' ) {
        this.loggedIn.next(true);
        this._router.navigate(['/home']);
        console.log('Login Successfully');
        } else {
            console.log('Login error');
        }
    }
}


import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { map, catchError} from 'rxjs/operators';
import { Effect, Actions, toPayload} from '@ngrx/effects';
import * as loginActions from '../../actions/actions';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { LoginService } from '../../../store/services/login.service';


@Injectable()
export class LoginEffects {
  constructor( private actions: Actions, public loginservice: LoginService, public router: Router) {}

    @Effect()
    public loadUser$: Observable<Action> = this.actions
        .ofType(loginActions.LOGIN_SUBMIT)
        .map(action => action)
        .switchMap((payload: any) => this.loginservice.getUserData()
                .map((user: any) => new loginActions.LoginSucess(user))
                .do(() => this.router.navigate(['/home']))
                .catch(error => Observable.of(new loginActions.LoginFail(error)))
        );
}

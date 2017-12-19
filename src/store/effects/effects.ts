import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { map, catchError} from 'rxjs/operators';
import { Effect, Actions} from '@ngrx/effects';
import * as loginActions from '../actions/actions';
// import { Action } from 'rxjs/scheduler/Action';

@Injectable()
export class LoginEffects {
  constructor( private actions: Actions) {}

    //   effect to react to login submit action
    @Effect()
    loadUser$ = this.actions.ofType(loginActions.LOGIN_SUBMIT)
        .pipe(
        map( user => new loginActions.LoginSucess(user)),                  // if success
        catchError(error => of(new loginActions.LoginFail(error)))         // if failure
        );
}

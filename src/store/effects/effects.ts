import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { map, catchError} from 'rxjs/operators';
import { Effect, Actions} from '@ngrx/effects';
import * as loginActions from '../actions/actions';

@Injectable()
export class LoginEffects {
  constructor( private actions$: Actions) {}
  @Effect()
  loadUser$ = this.actions$.ofType(loginActions.LOGIN_SUBMIT)
    .pipe(
      map( user => console.log('# Effects')),
      catchError(error => of(new loginActions.LoginFail(error)))
    );
}

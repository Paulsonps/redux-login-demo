import { State } from './router.reducer';
import { AppState } from './login/login.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as fromLogin from './login/login.reducer';
import * as fromRouter from './router.reducer';

export interface RootState {
    routerReducer: State;
    products: AppState;
}

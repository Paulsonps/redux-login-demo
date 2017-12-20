import * as fromRouter from '@ngrx/router-store';
import { AppState } from './login/login.reducer';
import * as fromLogin from './login/login.reducer';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface RouterStateUrl {
    url: String;
}

export interface State {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    routerReducer: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<
    fromRouter.RouterReducerState<RouterStateUrl>
>('routerReducer');

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        // const { queryParams } = routerState.root;

        // let state: ActivatedRouteSnapshot = routerState.root;
        // while (state.firstChild) {
        //     state = state.firstChild;
        // }
        // const { params } = state;
        return { url }; // , queryParams, params };
    }
}

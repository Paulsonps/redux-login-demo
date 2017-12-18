import { Action } from '@ngrx/store';


export const LOAD_LOGIN = 'load login';
export const LOAD_LOGIN_SUCESS = 'load login success';
export const LOAD_LOGIN_FAIL = 'load login fail';

export class LoadLogin implements Action {
    readonly type = LOAD_LOGIN;
    constructor(public payload?: any) { }
 }
 export class LoadLoginSucess implements Action {
    readonly type = LOAD_LOGIN_SUCESS;
    constructor(public payload?: any) { }
 }

 export class LoadLoginFail implements Action {
    readonly type = LOAD_LOGIN_FAIL;
    constructor(public payload?: any) { }
 }

// action type
export type PropertyAction = LoadLogin
                            | LoadLoginSucess
                            | LoadLoginFail;

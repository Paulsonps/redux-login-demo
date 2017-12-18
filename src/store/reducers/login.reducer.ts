import * as userActions from './../actions/actions';
import { User } from './../models/login.model';
import { Action } from 'rxjs/scheduler/Action';

export interface AppState {
    users: User[];
}

export const initialState: AppState = {
    users: []
};

const newState = (state, newData) => {
    const updatedState = Object.assign({}, state, newData);
    return updatedState;
};

export function loginReducer(state = initialState, action) {
    // console.log('REDUCER', action.payload);
    // const data = action.payload;
    switch (action.type) {
        case userActions.LOGIN_SUBMIT: {
            // console.log('HERE');
            // return newState(state, action.payload);
            return {
                ...state,
                users: action.payload
            };
        }

        case userActions.LOGIN_SUCESS: {
            const users = action.payload;
            return {
                ...state,
                users
            };
        }

        case userActions.LOGIN_FAIL: {
            return {
                ...state,
            };
        }

        default: {
            return state;
        }
    }
}

// export const getUsers = (state: AppState) => state.users;

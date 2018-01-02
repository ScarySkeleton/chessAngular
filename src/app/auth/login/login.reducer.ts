

import * as actions from './login.action';
import {IAction} from 'shared/interfaces/IAction';
import {ILoginState} from 'shared/interfaces/ILoginState';

const initState: ILoginState = {
    logIn: '',
    password: '',
    isLogined: false,
}

const loginReducer = (state = initState, action: IAction): ILoginState => {
    switch(action.type) {

        case actions.FETCH_ALL_USERS: 
            return {
                ...state,
            }

        case actions.FETCH_ALL_USERS_SUCCESS:
            return {
                ...state,
                isLogined: true,
                ...action.payload as ILoginState
            }

        case actions.FETCH_ALL_USERS_FAILURE: 
            return {
                ...state,
                isLogined: false,
                ...action.payload as ILoginState
            }

        default:
            return state;
    }
}

export {loginReducer};

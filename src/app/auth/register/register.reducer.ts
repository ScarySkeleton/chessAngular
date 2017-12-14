import { Action } from '@ngrx/store';

import { IRegister } from 'interfaces/IRegister';
import * as actions from './register.action';

export interface AppState {
    register: IRegister
}

const initState = {
    logIn: null,
    password: null
}

export const registerReducer = 
    (state:IRegister = initState, action: Action) => {

    console.log("register reducer: state, action", state, action);
    switch(action.type) {
        case actions.REGISTER_FAILURE: 
            return {
                ...state,
                response: action.payload,
            }
        
        case actions.REGISTER_SUCCESS: 
            return {
                ...state,
                response: action.payload
            }
        
        case actions.REGISTER_REQUEST: 
            return {
                ...state,
                request: action.payload
            }
        
        default: 
            return state;
    }
}

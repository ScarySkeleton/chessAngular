import {IAction} from 'interfaces/IAction';
import {IRegisterState} from 'interfaces/IRegisterState';
import * as actions from './register.action';

const initState: IRegisterState = {
    logIn: null,
    password: null,
    isRegistered: false,
}

export const registerReducer = 
        (state:IRegisterState = initState, action: IAction): any => { // TODO: But need IRegisterState, not an any return type
    switch(action.type) {
        case actions.REGISTER_FAILURE: 
            return {
                ...state,
                isRegistered: false,
            }
        
        case actions.REGISTER_SUCCESS: 
            return {
                ...state,
                isRegistered: true,
            }
        
        case actions.REGISTER_REQUEST:
            return {
                ...state,
                ...action.payload,
                isRegistered: false,
            }
        
        default: 
            return state;
    }
}

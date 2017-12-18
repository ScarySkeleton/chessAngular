import {IAction} from 'interfaces/IAction';
import {IRegister} from 'interfaces/IRegister';
import * as actions from './register.action';

const initState: IRegister = {
    logIn: null,
    password: null,
    isRegistered: false,
}

export interface IRegisterState {
    register: IRegister;
}

export const registerReducer = 
        (state:IRegister = initState, action: IAction) => {
    switch(action.type) {
        case actions.REGISTER_FAILURE: 
            return {
                ...state,
                ...action.payload,
                isRegistered: false,
            }
        
        case actions.REGISTER_SUCCESS: 
            return {
                ...state,
                ...action.payload,
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

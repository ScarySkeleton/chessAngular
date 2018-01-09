import * as actions from './session.action';
import {ISessionState} from 'shared/interfaces/ISessionState';
import {IUser} from 'shared/interfaces/IUser';
import {IAction} from 'shared/interfaces/IAction';

const initState: ISessionState = {
    user: null,
    logInFetch: false,
    isSessionActive: false,    
    logOutFetch: false,
    isSessionLogoutSuccess: false,
};

const sessionReducer = (state: ISessionState = initState, action: IAction): ISessionState => {
    switch(action.type) {
        
        case actions.USER_LOG_IN_FETCH:
            return {
                ...state,
                user: {
                    ...action.payload
                },
                logInFetch: true,
                isSessionActive: false,
                logOutFetch: false,
                isSessionLogoutSuccess: false,
            }

        case actions.USER_LOG_IN:
            return {
                ...state,
                user: {
                    ...action.payload
                },
                logInFetch: false,
                isSessionActive: true,
                logOutFetch: false,      
                isSessionLogoutSuccess: false,
            }
        
        case actions.USER_LOG_OUT_FETCH:
            return {
                ...state,
                logInFetch: false,
                isSessionActive: true,
                logOutFetch: true,  
                isSessionLogoutSuccess: false,
            }

        case actions.USER_LOG_OUT: 
            return {
                ...state,
                user: null,
                logInFetch: false,
                isSessionActive: false,
                logOutFetch: false,  
                isSessionLogoutSuccess: true,
            }
        
        default:
            return state;
    }
}

export {sessionReducer};

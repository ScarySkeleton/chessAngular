import * as actions from './session.action';
import {ISessionState} from 'shared/interfaces/ISessionState';
import {IUser} from 'shared/interfaces/IUser';
import {IAction} from 'shared/interfaces/IAction';

const initState: ISessionState = {
    user: null,
    isSessionActive: false
};

const sessionReducer = (state: ISessionState = initState, action: IAction): ISessionState => {
    switch(action.type) {
        case actions.USER_LOG_IN:
            return {
                ...state,
                user: {
                    ...action.payload
                },
                isSessionActive: true,
            }

        case actions.USER_LOG_OUT: 
            return {
                ...state,
                user: null,
                isSessionActive: false
            }
        
        default:
            return state;
    }
}

export {sessionReducer};

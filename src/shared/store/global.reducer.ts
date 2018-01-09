import {IAction} from 'interfaces/IAction';
import * as actions from './global.action';
import {IGlobalState} from 'interfaces/IGlobalState'; 

const initState: IGlobalState = {
    isFetching: false,
    navigateTo: ''
}

export const globalReducer = (state:IGlobalState = initState, action: IAction) => {
    switch(action.type) {
        case actions.IS_FETCHING: 
            return {
                ...state,
                isFetching: true,
                navigateTo: ''
            }

        case actions.ISNOT_FETCHING: 
            return {
                ...state,
                isFetching: false,
                navigateTo: ''
            }
        
        case actions.NAVIGATE_TO: 
            return {
                ...state,
                isFetching: false,
                navigateTo: action.payload
            }

        default:
            return state;
    }
}

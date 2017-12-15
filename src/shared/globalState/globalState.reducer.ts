import {IAction} from 'abstract/Action';
import * as actions from './globalState.action';

const initState = {
    isFetching: false
}

export interface IGlobalState {
    isFetching: boolean;
}

export const globalReducer = (state = initState, action: IAction) => {
    switch(action.type) {
        case actions.IS_FETCHING: 
            return {
                ...state,
                isFetching: true
            }

        case actions.ISNOT_FETCHING: 
            return {
                ...state,
                isFetching: false
            }
    }
}

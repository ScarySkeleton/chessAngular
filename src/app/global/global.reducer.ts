import {IAction} from 'abstract/Action';
import * as actions from './global.action';
import {IGlobal} from 'interfaces/IGlobal'; 

const initState: IGlobal = {
    isFetching: false
}

export interface IGlobalState {
    global: IGlobal;
}

export const globalReducer = (state:IGlobal = initState, action: IAction) => {
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

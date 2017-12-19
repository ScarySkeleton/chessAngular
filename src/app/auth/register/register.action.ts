import {IAction} from 'interfaces/IAction';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE =  'REGISTER_FAILURE';

export const registerRequest = (payload): IAction => {
    return {
        type: REGISTER_REQUEST,
        payload
    }
}

export const registerSuccess = (payload): IAction => {
    return {
        type: REGISTER_SUCCESS,
        payload
    }
}

export const registerFailure = (payload): IAction => {
    return {
        type: REGISTER_FAILURE,
        payload
    }
}

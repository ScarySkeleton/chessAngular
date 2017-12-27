import {IAction} from 'interfaces/IAction';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE =  'REGISTER_FAILURE';

export const registerRequest = (payload: object): IAction => {
    return {
        type: REGISTER_REQUEST,
        payload
    }
}

export const registerSuccess = (): IAction => {
    return {
        type: REGISTER_SUCCESS,
    }
}

export const registerFailure = (): IAction => {
    return {
        type: REGISTER_FAILURE,
    }
}

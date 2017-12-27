import {IAction} from 'interfaces/IAction';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE =  'REGISTER_FAILURE';

export const registerRequest = (payload: object): IAction => {
    console.log("register action request");
    return {
        type: REGISTER_REQUEST,
        payload
    }
}

export const registerSuccess = (): IAction => {
    console.log("register action success");
    return {
        type: REGISTER_SUCCESS,
    }
}

export const registerFailure = (): IAction => {
    console.log("register action failure");
    return {
        type: REGISTER_FAILURE,
    }
}

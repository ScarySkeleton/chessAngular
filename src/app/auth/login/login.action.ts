import {IAction} from 'shared/interfaces/IAction';

export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS';
export const FETCH_ALL_USERS_FAILURE = 'FETCH_ALL_USERS_FAILURE';

export class fetchAllUsers implements IAction {
    public readonly type: string = FETCH_ALL_USERS;
}

export class fetchAllUsersSuccess implements IAction {
    public readonly type: string = FETCH_ALL_USERS_SUCCESS;

    constructor(public payload: any) {}
}

export class fetchAllUsersFailure implements IAction {
    public readonly type: string = FETCH_ALL_USERS_FAILURE;
}

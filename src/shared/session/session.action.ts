import {IUser} from 'shared/interfaces/IUser';

export const USER_LOG_IN = 'USER_LOG_IN';
export const USER_LOG_OUT = 'USER_LOG_OUT';

export class userLogIn {
    public readonly type: string = USER_LOG_IN;
    constructor(public payload: IUser) {
    }
}

export class userLogOut {
    public readonly type: string = USER_LOG_OUT;
}

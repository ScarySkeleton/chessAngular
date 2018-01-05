import {IUser} from './IUser';

export interface ISessionState {
    user: IUser;
    logOut: boolean;
    isSessionActive: boolean;
}

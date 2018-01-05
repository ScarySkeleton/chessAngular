import {IUser} from './IUser';

export interface ISessionState {
    user: IUser;
    isSessionActive: boolean;
}

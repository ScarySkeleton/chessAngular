import {IUser} from './IUser';

export interface ISessionState {
    user: IUser;
    logInFetch: boolean;
    isSessionActive: boolean;
    logOutFetch: boolean;  
    isSessionLogoutSuccess: boolean;
}

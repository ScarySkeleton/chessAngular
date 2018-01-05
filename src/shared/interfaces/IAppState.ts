import {IGlobalState} from './IGlobalState';
import {IRegisterState} from './IRegisterState';
import {ILoginState} from './ILoginState';
import {IPopupState} from './IPopupState';
import {ISessionState} from './ISessionState';

export interface IAppState {
    global: IGlobalState;
    popup: IPopupState;
    login: ILoginState;
    register: IRegisterState;
    session: ISessionState;
}

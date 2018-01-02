import {IGlobalState} from './IGlobalState';
import {IRegisterState} from './IRegisterState';
import {ILoginState} from './ILoginState';
import {IPopupState} from './IPopupState';

export interface IAppState {
    global: IGlobalState;
    popup: IPopupState;
    login: ILoginState;
    register: IRegisterState;
}

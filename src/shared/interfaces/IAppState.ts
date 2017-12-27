import {IGlobalState} from './IGlobalState';
import {IRegisterState} from './IRegisterState';
import {IPopupState} from './IPopupState';

export interface IAppState {
    global: IGlobalState;
    popup: IPopupState;
    register: IRegisterState;
}
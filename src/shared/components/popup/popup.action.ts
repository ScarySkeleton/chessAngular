import {IAction} from 'shared/interfaces/IAction';
import {IPopupState} from 'shared/interfaces/IPopupState';

export const SHOW_POPUP = 'SHOW_POPUP';
export const ISNOTSHOW_POPUP = 'ISNOTSHOW_POPUP';

export class showPopup {
    readonly type: string = SHOW_POPUP;
    constructor(public payload: IPopupState) { }
}

export class isnotShowPopup {
    readonly type: string = ISNOTSHOW_POPUP;
}

import {IAction} from 'shared/interfaces/IAction';

import * as actions from './popup.action';
import {IPopupState} from 'shared/interfaces/IPopupState';

const initState: IPopupState = {
    isShow: false,
    title: "Info message",
    message: 'Default message',
    solution: 'Default solution',
    childComponent: null
}

export const popupReducer = (state = initState, action: IAction): IPopupState => {
    switch(action.type) {

        case actions.SHOW_POPUP:
            return {
                ...state,
                ...action.payload as IPopupState,
                isShow: true,
            }
        
        case actions.ISNOTSHOW_POPUP: 
            return {
                ...state,
                ...action.payload as IPopupState,
                isShow: false,
            }

        default: 
            return state;
    }
}

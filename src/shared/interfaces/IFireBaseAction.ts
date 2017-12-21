import {IAction} from 'shared/interfaces/IAction';

export interface IFireBaseAction {
    action?: IAction;
    successActionCallBack?: IAction;
    failureActionCallBack?: IAction;
}

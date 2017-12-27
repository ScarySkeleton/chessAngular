import {IAction} from 'shared/interfaces/IAction';

export interface IFireBaseAction {
    action?(payload?: object): IAction;
    successActionCallBack?(payload?: object): IAction;
    failureActionCallBack?(payload?: object): IAction;
}

import {Action} from '@ngrx/store';

export interface IAction extends Action {
    readonly payload?: object;

    constructor(public payload?: object) {}
} 

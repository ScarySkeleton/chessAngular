import {Action} from '@ngrx/store';

export abstract class IAction implements Action {
    
    readonly type: string;
    readonly payload?: object;

    constructor(public _type: string, public _payload?: object) {
        this.type = _type;
        this.payload = _payload;
    }
} 

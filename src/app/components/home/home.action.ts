import {IApplication} from 'shared/interfaces/IApplication';

export const FETCH_NEW_APPLICATION = 'FETCH_NEW_APPLICATION';
export const FETCH_NEW_APPLICATION_SUCCESS = 'FETCH_NEW_APPLICATION_SUCCESS';

export class fetchNewApplication {
    public readonly type: string = FETCH_NEW_APPLICATION;

    constructor(public payload: IApplication) {
    }
}

export class fetchNewApplicationSuccess {
    public readonly type: string = FETCH_NEW_APPLICATION_SUCCESS;
}

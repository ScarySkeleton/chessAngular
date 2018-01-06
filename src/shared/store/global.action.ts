export const IS_FETCHING = 'IS_FETCHING';
export const ISNOT_FETCHING = 'ISNOT_FETCHING';
export const NAVIGATE_TO = 'NAVIGATE_TO';

export class isFetching {
    public readonly type: string = IS_FETCHING;
}

export class isnotFetching {
    public readonly type: string = ISNOT_FETCHING;
}

export class navigateTo {
    public readonly type: string = NAVIGATE_TO;
    constructor(public payload: string) {
    }
}

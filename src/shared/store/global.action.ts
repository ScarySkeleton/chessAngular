export const IS_FETCHING = 'IS_FETCHING';
export const ISNOT_FETCHING = 'ISNOT_FETCHING';

export class isFetching {
    public readonly type: string = IS_FETCHING;
}

export class isnotFetching {
    public readonly type: string = ISNOT_FETCHING;
}

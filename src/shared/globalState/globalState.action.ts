export const IS_FETCHING = 'IS_FETCHING';
export const ISNOT_FETCHING = 'ISNOT_FETCHING';

export const isFetching = () => (
    {
        type: IS_FETCHING
    }
)

export const isnotFetching = () => (
    {
        type: ISNOT_FETCHING
    }
)

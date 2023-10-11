export enum ActionTypes {
    BASIC_PLEDGE = 'PROJECT/BASIC_PLEDGE',
    REWARD_PLEDGE = 'PROJECT/REWARD_PLEDGE',
}

interface RewardPayload {
    id: number;
    reduceRemainingByOne: number;
    currentAmount: number;
}

export type ProjectActions =
    | { type: ActionTypes.BASIC_PLEDGE }
    | { type: ActionTypes.REWARD_PLEDGE; payload: RewardPayload };

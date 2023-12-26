type TypeDateProgression = {
    date  : string,
    isFinish : boolean,
}
export interface IDuties {
    categoryType: string,
    dateProgression: TypeDateProgression[],
    id : string | number
}
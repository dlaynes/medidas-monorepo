import { Dispatch } from "react";

export interface IBaseContextData<TAction> {
    state: Object,
    methods: Object
    dispatch: Dispatch<TAction>
}

export type TAction<T> = {
    name: T
    payload?: unknown
}

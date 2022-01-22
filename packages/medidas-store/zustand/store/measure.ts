import create from 'zustand'

import { TMeasure } from "medidas-types/entities/Measure"

const useMeasureStore = create
    <{
        measures: TMeasure[],
        loading: boolean,
        error: string,
        fetch: (uid: string) => void
    }>(
    set => ({
        measures: [],
        loading: false,
        error: "",
        fetch: (uid: string) => {

        }
    })
)

export { useMeasureStore }

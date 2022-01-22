import { useState, useEffect } from "react"

export function useVolatileValue<T>(initialValue: T, expiresAfter=10000){
    const [value, setValue] = useState(() => initialValue)

    useEffect(function(){
        if(value === initialValue) return

        const timeout = setTimeout(() => {
            setValue(initialValue)
        }, expiresAfter)

        return function(){
            timeout && clearTimeout(timeout);
        }
    }, [initialValue, value])

    return {
        value, setValue
    }
}

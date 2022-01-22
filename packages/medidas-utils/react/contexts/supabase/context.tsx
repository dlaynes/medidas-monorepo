import type { UserCredentials, SupabaseClientOptions } from "@supabase/supabase-js"
import { createClient } from "@supabase/supabase-js"
import { createContext, useCallback, useEffect, useContext, useReducer } from "react"

import type { TSupabaseAction } from "./actions"
import { ESupabaseActions } from './actions'
import type { IBaseContextData } from "../base/types"

import { defaultMethods, defaultState, supabaseReducer } from "./reducer"
import { noop } from "../../../functions/empty"

const SupabaseContext = createContext<IBaseContextData<TSupabaseAction>>({
    state: defaultState,
    methods: defaultMethods,
    dispatch: noop
})

const SupabaseProvider : React.FC<{
    supabaseUrl: string,
    supabaseKey: string,
    debug?: boolean,
    supabaseClientOptions?: SupabaseClientOptions
}> = ({
    children,
    supabaseUrl,
    supabaseKey,
    debug=false,
    supabaseClientOptions
}) => {
    const [ state, dispatch ] = useReducer(supabaseReducer, defaultState)

    useEffect(function(){
        if(supabaseKey && supabaseUrl){
            // May throw an error
            const client_ = createClient(supabaseUrl, supabaseKey, supabaseClientOptions)
            if(client_){
                dispatch({name: ESupabaseActions.setClient, payload: {client: client_}})
            }
        }
    }, [supabaseUrl, supabaseKey, supabaseClientOptions])

    useEffect(function(){
        if(!state.client) return;

        const session = state.client.auth.session() || null
        const user = state.client.auth.user() || null

        dispatch({name: ESupabaseActions.setSessionUser, payload: {
            session,
            user
        }})

        const { data: authListener } = state.client.auth.onAuthStateChange((_event, session_) => {
            const session = session_ || null
            const user = state.client?.auth.user() || null

            dispatch({name: ESupabaseActions.setSessionUser, payload: {
                session,
                user
            }})
            if(debug){
                console.log("Supabase Session event", _event)
            }
        })

        return () => {
            authListener?.unsubscribe()
        }

    }, [state.client, debug])

    const methods = {
        signUp: useCallback(async function(payload: UserCredentials, options?: Record<string, unknown>){
            if(!state.client) return;

            dispatch({name: ESupabaseActions.initLoading})

            const { user, session, error } = await state.client.auth.signUp(payload, options)
            dispatch({name: ESupabaseActions.resetLoading})
            dispatch({name: ESupabaseActions.setSessionUser, payload: {
                user: user || null,
                session: session || null
            }})
            if(error){
                dispatch({name: ESupabaseActions.setErrors, payload: {
                    error: error.message,
                    status: error.status
                }});
            }
        }, [state.client]),
        signIn: useCallback(async function(payload: UserCredentials, options?: Record<string, unknown>){
            if(!state.client) return;

            dispatch({name: ESupabaseActions.initLoading})
            const { user, session, error } = await state.client.auth.signIn(payload, options)
            dispatch({name: ESupabaseActions.resetLoading})
            dispatch({name: ESupabaseActions.setSessionUser, payload: {
                user: user || null,
                session: session || null
            }})
            if(error){
                dispatch({name: ESupabaseActions.setErrors, payload: {
                    error: error.message,
                    status: error.status
                }});
            }
        }, [state.client]),
        signOut: useCallback(async function(){
            if(!state.client) return;

            dispatch({name: ESupabaseActions.initLoading})
            const { error } = await state.client.auth.signOut()
            dispatch({name: ESupabaseActions.resetLoading})
            if(error){
                dispatch({name: ESupabaseActions.setErrors, payload: {
                    error: error.message,
                    status: error.status
                }});
            }
        }, [state.client])
    };

    return (
        <SupabaseContext.Provider value={{state, methods, dispatch}}>
            {children}
        </SupabaseContext.Provider>
    )
}

const useSupabase = function(){
    return useContext(SupabaseContext)
}

export { useSupabase, SupabaseProvider, ESupabaseActions }

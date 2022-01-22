import type { SupabaseClient, Session, User, UserCredentials } from "@supabase/supabase-js";
import { noop } from "medidas-utils/functions/empty";
import type { TSupabaseAction } from "./actions"
import { ESupabaseActions } from "./actions";

export interface ISupabaseContextState {
    client: SupabaseClient | null
    session: Session | null
    error: string
    errorStatus: number | null
    loading: boolean
    user: User | null
}

export interface ISupabaseContextMethods {
    signIn: (credentials: UserCredentials, options: Record<string, unknown>) => void
    signOut: () => void
    signUp: (credentials: UserCredentials, options: Record<string, unknown>) => void
}

export const defaultState : ISupabaseContextState = {
    client: null,
    session: null,
    error: '',
    errorStatus: null,
    loading: false,
    user: null
}

export const defaultMethods : ISupabaseContextMethods = {
    signIn: noop,
    signOut: noop,
    signUp: noop
}

export const supabaseReducer = function(state: ISupabaseContextState, action: TSupabaseAction) : ISupabaseContextState {
    switch(action.name){
        case ESupabaseActions.setSessionUser:
            return {
                ...state,
                session: action.payload.session,
                user: action.payload.user
            };
        case ESupabaseActions.resetSessionUser:
            return {
                ...state,
                session: null,
                user: null
            };
        case ESupabaseActions.setClient:
            return {
                ...state,
                client: action.payload.client
            };
        case ESupabaseActions.resetClient:
            return {
                ...state,
                client: null
            };
            break;
        case ESupabaseActions.initLoading:
            return {
                ...state,
                loading: true,
                error: '',
                errorStatus: null
            }
        case ESupabaseActions.resetLoading:
            return {
                ...state,
                loading: false
            }
        case ESupabaseActions.setErrors:
            return {
                ...state,
                error: action.payload.error,
                errorStatus: action.payload.status
            }
        case ESupabaseActions.resetErrors:
            return {
                ...state,
                error: '',
                errorStatus: null
            }
        default:
            return state
    }
}

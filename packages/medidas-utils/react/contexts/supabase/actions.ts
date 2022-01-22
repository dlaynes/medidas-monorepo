import type { Session, SupabaseClient, User } from "@supabase/supabase-js";
import type { TAction } from '../base/types'

export const enum ESupabaseActions {
    setErrors = '@supabase/set-errors',
    resetErrors = '@supabase/reset-errors',
    initLoading = '@supabase/set-loading',
    resetLoading = '@supabase/reset-loading',
    setClient = '@supabase/set-client',
    resetClient = '@supabase/reset-client',
    setSessionUser = '@supabase/set-session-user',
    resetSessionUser = '@supabase/reset-session-user'
}

export type ISetErrorsAction = TAction<ESupabaseActions> & {
    name: ESupabaseActions.setErrors,
    payload: { error: string, status: number }
}

export type IResetErrorsAction = TAction<ESupabaseActions> & {
    name: ESupabaseActions.resetErrors
}

export type ISetLoadingAction = TAction<ESupabaseActions> & {
    name: ESupabaseActions.initLoading
}

export type IResetLoadingAction = TAction<ESupabaseActions> & {
    name: ESupabaseActions.resetLoading
}

export type ISetClientAction = TAction<ESupabaseActions> & {
    name: ESupabaseActions.setClient,
    payload: { client: SupabaseClient }
}

export type IResetClientAction = TAction<ESupabaseActions> & {
    name: ESupabaseActions.resetClient,
}

export type ISetSessionUserAction = TAction<ESupabaseActions> & {
    name: ESupabaseActions.setSessionUser,
    payload: { session: Session | null, user: User | null }
}

export type IResetSessionUserAction = TAction<ESupabaseActions> & {
    name: ESupabaseActions.resetSessionUser,
}

export type TSupabaseAction =
    | ISetErrorsAction
    | IResetErrorsAction
    | ISetLoadingAction
    | IResetLoadingAction

    | IResetClientAction
    | ISetClientAction
    | IResetSessionUserAction
    | ISetSessionUserAction

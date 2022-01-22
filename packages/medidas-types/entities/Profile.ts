export type TProfile = {
  first_name: string
  last_name: string
  date_of_birth?: string
  avatar_url?: string
}

/* Objects that might be persisted should be stored with primitive fields */
export type TProfilePayload = TProfile & {
  created_at?: string
  updated_at?: string
}

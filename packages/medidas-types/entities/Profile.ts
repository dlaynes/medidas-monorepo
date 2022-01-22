export interface IProfile {
  first_name: string
  last_name: string
  date_of_birth?: string
  avatar_url?: string
}

export interface IProfilePayload extends IProfile {
  created_at?: Date
  updated_at?: Date
}

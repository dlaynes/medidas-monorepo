import Constants from 'expo-constants';

export const SUPABASE_URL = Constants.manifest?.extra?.SUPABASE_URL || ''
export const SUPABASE_ANON_KEY = Constants.manifest?.extra?.SUPABASE_ANON_KEY || ''

if(!SUPABASE_ANON_KEY || !SUPABASE_URL){
  console.warn("Supabase configuration values are empty! Check your .env file")
}

export const Styles = {
  fontNormal: 20,
  fontMedium: 28,
  fontLarge: 34,
  fontExtraLarge: 40,
  colorPrimary: 'black',
  spacing: 12,
}

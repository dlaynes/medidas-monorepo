if (!process.env.REACT_NATIVE_SUPABASE_URL) {
  console.log("Environment", JSON.stringify(process.env, null, 2))
  console.warn('constants.ts', 'Make sure you have a `.env` file to populate your variables, and the variables are not empty.')
}

export const SUPABASE_URL = process.env.REACT_NATIVE_SUPABASE_URL || ''
export const SUPABASE_ANON_KEY = process.env.REACT_NATIVE_SUPABASE_ANON_KEY || ''

export const Styles = {
  fontNormal: 20,
  fontMedium: 28,
  fontLarge: 34,
  fontExtraLarge: 40,
  colorPrimary: 'black',
  spacing: 12,
}

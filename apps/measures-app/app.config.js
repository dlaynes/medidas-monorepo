import 'dotenv/config';

export default {
  name: "medidas-app",
  slug: "medidas-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    "image": "./assets/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  },
  updates: {
    "fallbackToCacheTimeout": 0
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    "supportsTablet": true
  },
  android: {
    "adaptiveIcon": {
      "foregroundImage": "./assets/adaptive-icon.png",
      "backgroundColor": "#FFFFFF"
    }
  },
  web: {
    "favicon": "./assets/favicon.png"
  },
  extra: {
    SUPABASE_URL: process.env.REACT_NATIVE_SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.REACT_NATIVE_SUPABASE_ANON_KEY
  }
}

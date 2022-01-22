import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { ThemeProvider, Text } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { SupabaseProvider } from "medidas-store/contexts/supabase"
import { SUPABASE_ANON_KEY, SUPABASE_URL } from './lib/constants';
import { styles, theme } from './App.presets';

const options = {
  localStorage: AsyncStorage
};

export default function App() {

  return (
    <SupabaseProvider
      supabaseKey={SUPABASE_ANON_KEY}
      supabaseUrl={SUPABASE_URL}
      debug={!!__DEV__}
      supabaseClientOptions={options}
    >
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <View style={styles.verticallySpaced}>
            <Text h1>Medidas</Text>
          </View>
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </SupabaseProvider>
  );
}

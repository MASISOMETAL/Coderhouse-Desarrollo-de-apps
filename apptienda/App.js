import * as SplashScreen from 'expo-splash-screen'

import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans'

import ShopNavigator from './src/navigation/ShopNavigator.js'
import { StyleSheet } from 'react-native';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  })

  useEffect(()=>{
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  },[fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <ShopNavigator />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans'
import ShopNavigator from './src/navigation/ShopNavigator.js'

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


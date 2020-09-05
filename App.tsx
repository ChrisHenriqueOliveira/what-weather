import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      'Montserrat-Black': require('./src/assets/fonts/Montserrat-Black.ttf'),
      'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Light': require('./src/assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
      'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Thin': require('./src/assets/fonts/Montserrat-Thin.ttf'),
    });
  };

  if (!fontsLoaded) {
    return (
      <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontsLoaded(true)}
      />
    )
  }

  
  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

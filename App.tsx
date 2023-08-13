import { useCallback } from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AuthNavigation from './navigations/AuthNavigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View
      style={{ flex: 1 }}
      onLayout={onLayoutRootView}>
      <AuthNavigation />
    </View>
  );
}
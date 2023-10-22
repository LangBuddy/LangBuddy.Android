import { useCallback } from "react";
import { Provider } from "react-redux";
import { View } from "react-native";

import { store } from "store";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Navigator } from "navigator";


function Main() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded, fontError] = useFonts({
    "Montserrat-ExtraLight": require("./assets/fonts/Montserrat/static/Montserrat-ExtraLight.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
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
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Navigator />
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

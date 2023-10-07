import { useCallback } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AuthNavigation from "navigators/AuthNavigator";
import { store } from "utils/store";
import { Provider } from "react-redux";
SplashScreen.preventAutoHideAsync();

function Main() {
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
      <AuthNavigation />
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

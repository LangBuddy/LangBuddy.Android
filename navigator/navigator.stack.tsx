import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthNavigatorData } from "./navigator.data";

import AuthSignUp from "screens/AuthSignUp/AuthSignUp";
import AuthRestorePassword from "screens/AuthRestorePassword/AuthRestorePassword";
import AuthPersonalInformation from "screens/AuthPersonalInformation/AuthPersonalInformation";
import AuthRegionSettings from "screens/AuthRegionSettings/AuthRegionSettings";
import AuthLangSelect from "screens/AuthLangSelect/AuthLangSelect";
import { AuthSignIn, AuthWelcome } from "screens/auth";

const Stack = createNativeStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={AuthNavigatorData.AuthWelcome}
      component={AuthWelcome}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={AuthNavigatorData.AuthSignIn}
      component={AuthSignIn}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={AuthNavigatorData.AuthSignUp}
      component={AuthSignUp}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={AuthNavigatorData.AuthRestorePassword}
      component={AuthRestorePassword}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={AuthNavigatorData.AuthPersonalInformation}
      component={AuthPersonalInformation}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={AuthNavigatorData.AuthRegionSettings}
      component={AuthRegionSettings}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={AuthNavigatorData.AuthLangSelect}
      component={AuthLangSelect}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

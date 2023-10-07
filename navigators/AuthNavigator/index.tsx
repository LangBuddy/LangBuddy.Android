import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthNavigationScreens } from "./types";
import AuthWelcome from "screens/AuthWelcome/AuthWelcome";
import AuthSignIn from "screens/AuthSignIn/AuthSignIn";
import AuthSignUp from "screens/AuthSignUp/AuthSignUp";
import AuthRestorePassword from "screens/AuthRestorePassword/AuthRestorePassword";
import AuthPersonalInformation from "screens/AuthPersonalInformation/AuthPersonalInformation";
import AuthRegionSettings from "screens/AuthRegionSettings/AuthRegionSettings";
import AuthLangSelect from "screens/AuthLangSelect/AuthLangSelect";

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={AuthNavigationScreens.AuthWelcome}
                component={AuthWelcome}
                options={{ headerShown: false }} />
            <Stack.Screen name={AuthNavigationScreens.AuthSignIn}
                component={AuthSignIn}
                options={{ headerShown: false }} />
            <Stack.Screen name={AuthNavigationScreens.AuthSignUp}
                component={AuthSignUp}
                options={{ headerShown: false }} />
            <Stack.Screen name={AuthNavigationScreens.AuthRestorePassword}
                component={AuthRestorePassword}
                options={{ headerShown: false }} />
            <Stack.Screen name={AuthNavigationScreens.AuthPersonalInformation}
                component={AuthPersonalInformation}
                options={{ headerShown: false }} />
            <Stack.Screen name={AuthNavigationScreens.AuthRegionSettings}
                component={AuthRegionSettings}
                options={{ headerShown: false }} />
            <Stack.Screen name={AuthNavigationScreens.AuthLangSelect}
                component={AuthLangSelect}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
}
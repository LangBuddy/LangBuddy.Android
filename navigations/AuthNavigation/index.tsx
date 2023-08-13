import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthNavigationScreens } from "./types";
import AuthWelcome from "../../screens/AuthWelcome/AuthWelcome";
import AuthSignIn from "../../screens/AuthSignIn/AuthSignIn";
import AuthSignUp from "../../screens/AuthSignUp/AuthSignUp";

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={AuthNavigationScreens.AuthWelcome}
                component={AuthWelcome}
                options={{headerShown: false}} />
            <Stack.Screen name={AuthNavigationScreens.AuthSignIn}
                component={AuthSignIn}
                options={{headerShown: false}} />
            <Stack.Screen name={AuthNavigationScreens.AuthSignUp}
                component={AuthSignUp}
                options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
}
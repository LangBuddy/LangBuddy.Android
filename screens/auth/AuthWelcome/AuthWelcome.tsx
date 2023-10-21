import { View } from "react-native";

import AuthLayout from "layouts/AuthLayout/AuthLayout";
import Button from "components/Button/Button";
import { AuthNavigationScreens } from "navigators/AuthNavigator/types";
import { global } from "global/styles";

import { IAuthWelcome } from "./types";
import { styles } from "./styles";
import { authWelcome } from "./langs";

export function AuthWelcome({ navigation }: IAuthWelcome) {
  return (
    <AuthLayout title={authWelcome.welcome} subtitle={authWelcome.authorization}>
      <View style={global.authMain}>
        <View style={styles.authWelcomeMenu}>
          <Button
            title={authWelcome.signIn}
            color="solid"
            onPress={() =>
              navigation?.navigate(AuthNavigationScreens.AuthSignIn)
            }
          />
          <Button
            title={authWelcome.signUp}
            color="linear"
            onPress={() =>
              navigation?.navigate(AuthNavigationScreens.AuthSignUp)
            }
          />
        </View>
      </View>
    </AuthLayout>
  );
}

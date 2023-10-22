import React from "react";
import { Image, Text, View, KeyboardAvoidingView } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch } from "store";
import AuthLayout from "layouts/AuthLayout/AuthLayout";
import Input from "components/Input";
import ButtonLink from "components/ButtonLink";
import Button from "components/Button/Button";
import { Email, Password } from "components/Icon";
import { global } from "global/styles";

import { AuthSignInFormType, IAuthSignIn } from "./types";
import { styles } from "./styles";
import { sendAuthenticateUser } from "store/user/user.fetching";
import { AuthNavigatorData } from "navigator/navigator.data";

export function AuthSignIn({ navigation }: IAuthSignIn) {
  const dispatch = useAppDispatch();
  const {
    register: login,
    handleSubmit,
    setValue,
  } = useForm<AuthSignInFormType>();

  React.useEffect(() => {
    login("email");
    login("password");
  }, [login]);

  const onChangeField = React.useCallback(
    (name: "email" | "password") => (text: string) => {
      setValue(name, text);
    },
    []
  );

  const onSubmit: SubmitHandler<AuthSignInFormType> = async (data) => {
    await dispatch(sendAuthenticateUser({
        email: data.email,
        password: data.password
    }))
    // navigation?.navigate(AuthNavigationScreens.AuthPersonalInformation)
  };

  return (
    <AuthLayout>
      <View style={global.authMain}>
        <View style={global.authForm}>
          <Input
            icon={Email}
            options={{
              placeholder: "email",
              onChangeText: onChangeField("email"),
              autoComplete: "email",
              keyboardType: "email-address",
              textContentType: "emailAddress",
            }}
          />
          <Input
            icon={Password}
            options={{
              secureTextEntry: true,
              autoComplete: "password",
              placeholder: "password",
              onChangeText: onChangeField("password"),
            }}
          />
          <Button
            title="Sign In"
            color="solid"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
        <View style={styles.authSignInForgot}>
          <ButtonLink
            title="Forgot password?"
            onPress={() =>
              navigation?.navigate(AuthNavigatorData.AuthRestorePassword)
            }
          />
        </View>
        <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
          <View style={styles.authSignInApplication}>
            <Text style={styles.authSignInApplicationText}>
              Or sign in with
            </Text>
            <Image source={require("assets/icons/googleIcon.png")} />
          </View>
        </KeyboardAvoidingView>
      </View>
    </AuthLayout>
  );
}

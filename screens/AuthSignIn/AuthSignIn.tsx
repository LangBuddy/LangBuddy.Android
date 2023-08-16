import React from "react";
import { Image, Text, View, KeyboardAvoidingView } from "react-native";
import { useForm } from 'react-hook-form';
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Input from "../../components/Input";
import { AuthSignInFormType, IAuthSignIn } from "./types";
import ButtonLink from "../../components/ButtonLink";
import Button from "../../components/Button/Button";
import { AuthNavigationScreens } from "../../navigations/AuthNavigation/types";
import { Email, Password } from "../../components/Icon";

import { styles } from "./styles";
import { global } from "../../global";

export default function AuthSignIn({ navigation }: IAuthSignIn) {
    const { register: login, handleSubmit, setValue } = useForm<AuthSignInFormType>();

    React.useEffect(() => {
        login('email');
        login('password');
    }, [login]);

    const onChangeField = React.useCallback((name: 'email' | 'password') => (text: string) => {
        setValue(name, text);
    }, []);

    return (
        <AuthLayout>
            <View style={global.authMain}>
                <View style={global.authForm}>
                    <Input icon={Email}
                        options={{
                            placeholder: "email",
                            onChangeText: onChangeField('email'),
                            autoComplete: 'email',
                            keyboardType: 'email-address',
                            textContentType: "emailAddress",
                        }}
                    />
                    <Input icon={Password}
                        options={{
                            secureTextEntry: true,
                            autoComplete: "password",
                            placeholder: "password",
                            onChangeText: onChangeField('password')
                        }}
                    />
                    <Button title="Sign In" color='solid' />
                </View>
                <View style={styles.authSignInForgot}>
                    <ButtonLink title="Forgot password?"
                        onPress={() => navigation?.navigate(AuthNavigationScreens.AuthRestorePassword)} />
                </View>
                <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
                    <View style={styles.authSignInApplication}>
                        <Text style={styles.authSignInApplicationText}>Or sign in with</Text>
                        <Image source={require('../../assets/icons/googleIcon.png')} />
                    </View>
                </KeyboardAvoidingView>
            </View>
        </AuthLayout>
    )
}
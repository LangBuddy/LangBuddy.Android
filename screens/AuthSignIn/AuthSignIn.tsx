import React from "react";
import { Image, Text, View, KeyboardAvoidingView } from "react-native";
import { useForm } from 'react-hook-form';
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Input from "../../components/Input";
import { AuthSignInFormType } from "./types";
import ButtonLink from "../../components/ButtonLink";
import Button from "../../components/Button/Button";
import { AuthNavigationScreens } from "../../navigations/AuthNavigation/types";
import { Email, Password } from "../../components/Icon";

import { styles } from "./styles";

interface IAuthSignIn {
    navigation?: NavigationProp<ParamListBase, string>
}

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
            <View style={styles.authSignIn}>
                <View style={styles.authSignInForm}>
                    <Input icon={<Email />}
                        placeholder="email"
                        onChangeText={onChangeField('email')}
                        autoComplete="email"
                        keyboardType='email-address'
                        textContentType="emailAddress" />
                    <Input icon={<Password />}
                        secureTextEntry
                        autoComplete="password"
                        placeholder="password"
                        onChangeText={onChangeField('password')} />
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
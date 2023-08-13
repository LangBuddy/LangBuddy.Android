import React from "react";
import { Image, Text, View } from "react-native";
import { useForm } from 'react-hook-form';
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { ButtonColorEnum } from "../../components/Button/type";
import Input from "../../components/Input";
import { Icon } from "../../components/Icon";
import { styles } from "./styles";
import { AuthSignInFormType } from "./types";
import ButtonLink from "../../components/ButtonLink";
import Button from "../../components/Button/Button";

export default function AuthSignIn() {
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
                    <Input icon={<Icon.Email />}
                        placeholder="email"
                        onChangeText={onChangeField('email')}
                        autoComplete="email"
                        keyboardType='email-address'
                        textContentType="emailAddress" />
                    <Input icon={<Icon.Password />}
                        secureTextEntry
                        autoComplete="password"
                        placeholder="password"
                        onChangeText={onChangeField('password')} />
                    <Button title="Sign In" color={ButtonColorEnum.solid} />
                </View>
                <View style={styles.authSignInForgot}>
                    <ButtonLink title="Forgot password?" />
                </View>
                <View style={styles.authSignInApplication}>
                    <Text style={styles.authSignInApplicationText}>Or sign in with</Text>
                    <Image source={require('../../assets/icons/googleIcon.png')} />
                </View>
            </View>
        </AuthLayout>
    )
}
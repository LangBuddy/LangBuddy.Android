import React from "react";
import { View, Text, Image } from "react-native";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Input from "../../components/Input";
import { Icon } from "../../components/Icon";
import { useForm } from "react-hook-form";
import { AuthSignUpFormType } from "./types";
import { styles } from "./styles";
import Button from "../../components/Button/Button";
import { ButtonColorEnum } from "../../components/Button/type";
import ButtonLink from "../../components/ButtonLink";

export default function AuthSignUp() {
    const { register, handleSubmit, setValue } = useForm<AuthSignUpFormType>();

    React.useEffect(() => {
        register('nickname');
        register('email');
        register('password');
    }, [register]);

    const onChangeField = React.useCallback((name: 'email' | 'password' | 'nickname') => (text: string) => {
        setValue(name, text);
    }, []);

    return (
        <AuthLayout>
            <View style={styles.authSignIn}>
                <View style={styles.authSignInForm}>
                    <Input icon={<Icon.User />}
                        placeholder="nickname"
                        onChangeText={onChangeField('nickname')}
                        autoComplete="nickname"
                        textContentType="nickname" />
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
                    <Text style={styles.authSignInApplicationText}>Or sign up with</Text>
                    <Image source={require('../../assets/icons/googleIcon.png')} />
                </View>
            </View>
        </AuthLayout>
    )
}
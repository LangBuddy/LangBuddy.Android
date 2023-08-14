import React from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { AuthSignUpFormType } from "./types";
import Button from "../../components/Button/Button";
import { Email, Password, User } from "../../components/Icon";
import { AuthNavigationScreens } from "../../navigations/AuthNavigation/types";

import { styles } from "./styles";
import { global } from "../../global";

interface IAuthSignUp {
    navigation?: NavigationProp<ParamListBase, string>
}

export default function AuthSignUp({ navigation }: IAuthSignUp) {
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
            <View style={global.authMain}>
                <View style={global.authForm}>
                    <Input icon={User}
                        options={{
                            placeholder: "nickname",
                            onChangeText: onChangeField('nickname'),
                            autoComplete: "nickname",
                            textContentType: "nickname"
                        }}
                    />
                    <Input icon={Email}
                        options={{
                            placeholder: "email",
                            onChangeText: onChangeField('email'),
                            autoComplete: "email",
                            keyboardType: 'email-address',
                            textContentType: "emailAddress"
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
                    <Button title="Sign In" color='solid'
                    onPress={() => navigation?.navigate(AuthNavigationScreens.AuthPersonalInformation)} />
                </View>
                <KeyboardAvoidingView behavior='height' style={{ flex: 1 }}>
                    <View style={styles.authSignInApplication}>
                        <Text style={styles.authSignInApplicationText}>Or sign up with</Text>
                        <Image source={require('../../assets/icons/googleIcon.png')} />
                    </View>
                </KeyboardAvoidingView>
            </View>
        </AuthLayout>
    )
}
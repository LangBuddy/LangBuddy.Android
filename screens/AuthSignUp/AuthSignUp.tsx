import React from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";

import AuthLayout from "layouts/AuthLayout/AuthLayout";
import Input from "components/Input";
import Button from "components/Button/Button";
import { Email, Password, User } from "components/Icon";
import { AuthNavigationScreens } from "navigators/AuthNavigator/types";
import { global } from "global/styles";

import { AuthSignUpFormType, IAuthSignUp } from "./types";
import { styles } from "./styles";
import { useAppDispatch, useAppSelector } from "utils/store";
import { setAuthData } from "utils/store/reducers/registerReducer";

export default function AuthSignUp({ navigation }: IAuthSignUp) {
    const authData = useAppSelector((state) => state.registerData.auth)
    const dispatch = useAppDispatch()
    const { register, handleSubmit, setValue } = useForm<AuthSignUpFormType>();

    React.useEffect(() => {
        register('nickname');
        register('email');
        register('password');
    }, [register]);

    const onChangeField = React.useCallback((name: 'email' | 'password' | 'nickname') => (text: string) => {
        setValue(name, text);
    }, []);

    const onSubmit: SubmitHandler<AuthSignUpFormType> = (data) => {
        dispatch(setAuthData({...data}))
        navigation?.navigate(AuthNavigationScreens.AuthPersonalInformation)
    }

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
                    <Button title="Sign Up" color='solid'
                    onPress={handleSubmit(onSubmit)} />
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
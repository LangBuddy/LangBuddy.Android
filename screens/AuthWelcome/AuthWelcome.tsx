import { View } from 'react-native';

import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import Button from 'components/Button/Button';
import { AuthNavigationScreens } from 'navigators/AuthNavigator/types';
import { global } from 'global/styles';

import { IAuthWelcome } from './types';
import { styles } from './styles';

export default function AuthWelcome({ navigation }: IAuthWelcome) {
    return (
        <AuthLayout
            title='Welcome'
            subtitle='Authorization'>
            <View style={global.authMain}>
                <View style={styles.authWelcomeMenu}>
                    <Button title='Sign In' color='solid'
                        onPress={() => navigation?.navigate(AuthNavigationScreens.AuthSignIn)} />
                    <Button title='Sign Up' color='linear'
                        onPress={() => navigation?.navigate(AuthNavigationScreens.AuthSignUp)} />
                </View>
            </View>
        </AuthLayout>
    )
}
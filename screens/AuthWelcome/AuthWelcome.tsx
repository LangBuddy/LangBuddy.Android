import { View, Text } from 'react-native';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import Button from '../../components/Button/Button';
import { AuthNavigationScreens } from '../../navigations/AuthNavigation/types';
import { IAuthWelcome } from './types';

import { styles } from './styles';
import { global } from '../../global';

export default function AuthWelcome({ navigation }: IAuthWelcome) {
    return (
        <AuthLayout>
            <View style={global.authMain}>
                <View style={styles.authWelcomeInfo}>
                    <Text style={styles.authWelcomeTitle}>Welcome</Text>
                    <Text style={global.authSubtitle}>Authorization</Text>
                </View>
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
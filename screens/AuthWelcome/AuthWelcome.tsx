import { View, Text } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import Button from '../../components/Button/Button';
import { AuthNavigationScreens } from '../../navigations/AuthNavigation/types';

import { styles } from './styles';

interface IAuthWelcome {
    navigation?: NavigationProp<ParamListBase, string>
}

export default function AuthWelcome({ navigation }: IAuthWelcome) {
    return (
        <AuthLayout>
            <View style={styles.authWelcome}>
                <View style={styles.authWelcomeInfo}>
                    <Text style={styles.authWelcomeTitle}>Welcome</Text>
                    <Text style={styles.authWelcomeSubtitle}>Authorization</Text>
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
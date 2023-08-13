import { View, Text } from 'react-native';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import Button from '../../components/Button/Button';
import { ButtonColorEnum } from '../../components/Button/type';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { styles } from './styles';
import { AuthNavigationScreens } from '../../navigations/AuthNavigation/types';

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
                    <Button title='Sign In' color={ButtonColorEnum.solid}
                        onPress={() => navigation?.navigate(AuthNavigationScreens.AuthSignIn)} />
                    <Button title='Sign Up' color={ButtonColorEnum.linear}
                        onPress={() => navigation?.navigate(AuthNavigationScreens.AuthSignUp)} />
                </View>
            </View>
        </AuthLayout>
    )
}
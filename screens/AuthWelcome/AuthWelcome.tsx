import { View, Text } from 'react-native';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import Button from '../../components/Button/Button';
import { ButtonColorEnum } from '../../components/Button/type';
import { styles } from './style';

export default function AuthWelcome() {
    return (
        <AuthLayout>
            <View style={styles.authWelcome}>
                <View style={styles.authWelcomeInfo}>
                    <Text style={styles.authWelcomeTitle}>Welcome</Text>
                    <Text style={styles.authWelcomeSubtitle}>Authorization</Text>
                </View>
                <View style={styles.authWelcomeMenu}>
                    <Button title='Sign In' color={ButtonColorEnum.solid}/>
                    <Button title='Sign Up' color={ButtonColorEnum.linear}/>
                </View>
            </View>
        </AuthLayout>
    )
}
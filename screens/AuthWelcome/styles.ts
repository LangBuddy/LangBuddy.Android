import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    authWelcome: {
        alignItems: 'center',
        flex: 1,
    },
    authWelcomeInfo: {
        flex: 1,
        alignItems: 'center',
    },
    authWelcomeMenu: {
        width: '100%',
        flex: 1,
        rowGap: 16,
        justifyContent: 'flex-end',
        marginBottom: 22,
    },
    authWelcomeTitle: {
        fontSize: 32,
        fontFamily: 'Montserrat-SemiBold',
        color: '#fff',
        marginTop: 43,
    },
    authWelcomeSubtitle: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: '#fff',
        marginTop: 34,
    },
})
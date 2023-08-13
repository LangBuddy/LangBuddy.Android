import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    authSignIn: {
        alignItems: 'center',
        flex: 1,
    },

    authSignInForm: {
        alignItems: 'center',
        width: '100%',
        rowGap: 14,
        marginTop: 38
    },

    authSignInForgot: {
        marginTop: 23
    },

    authSignInApplication: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 22
    },

    authSignInApplicationText: {
        color: '#000',
        fontFamily: 'Montserrat-Regular',
        fontWeight: '400',
        fontSize: 14,
        marginBottom: 18,
    },

    authSignInApplicationImage: {
        height: 30, width: 30,
    },
});
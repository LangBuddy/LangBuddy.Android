import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
    authMain: {
        flex: 1,
        alignItems: 'center',
    },
    authSubtitle: {
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 48
    },
    authForm: {
        alignItems: 'center',
        width: '100%',
        rowGap: 9,
        marginTop: 31
    }
})
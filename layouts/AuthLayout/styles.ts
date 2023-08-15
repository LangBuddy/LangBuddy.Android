import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    auth: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 45,
    },
    authImage: {
        height: 109,
        width: 181,
        marginTop: 45,
    },
    authTitle:{
        fontSize: 32,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600',
        color: '#fff',
        marginTop: 43,
    },
    authSubtitle:{
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 48
    },
    authContainer: {
        flex: 1,
        maxWidth: 280,
        width: '100%',
    }
});
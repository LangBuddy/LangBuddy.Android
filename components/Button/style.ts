import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    componentButton: {
        borderRadius: 10,
        paddingVertical: 10,
        width: '100%',
    },

    componentButtonSolid: {
        backgroundColor: '#4A036F',
    },

    componentButtonLinear: {
        backgroundColor: '#FFF',
        borderBlockColor: '#4A036F',
        borderStyle: 'solid',
        borderWidth: 2,
    },

    componentButtonText: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        fontStyle: 'normal',
        textAlign: 'center',
    },

    componentButtonTextSolid: {
        color: '#fff',
    },

    componentButtonTextLinear: {
        color: '#4A036F',
    }
})
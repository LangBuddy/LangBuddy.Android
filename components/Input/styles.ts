import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    componentInput: {
        backgroundColor: 'background: rgba(255, 255, 255, 0.70)',
        borderRadius: 10,
        paddingVertical: 10,
        width: '100%',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 23,
        paddingHorizontal: 11,
    },

    componentInputValue: {
        flex: 1,
        color: '#898989',
        fontFamily: 'Montserrat-Regular',
        fontWeight: '400',
        width: '100%',
    },

    componentInputValueFocused: {
        color: '#000',
    }
});
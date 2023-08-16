import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    modal: {
        height: '80%',
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },

    modalTitle: {
        height: 55,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    modalTitleText: {
        color: '#000',
        fontFamily: 'Montserrat-ExtraLight',
        fontSize: 20,
        fontWeight: '200',
    },

    modalContent: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    }
});
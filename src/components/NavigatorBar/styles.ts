import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    settingButton: {
        marginRight: 15,
        fontSize: 16,
    },
    recordButton: {
        width: 60,
        height: 60,
        backgroundColor:'rgb(146, 183, 65)',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    recordButtonText: {
        color: 'white',
        fontSize: 32,
    },
});

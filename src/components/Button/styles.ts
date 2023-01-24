import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Colors } from "../../configs/colors";
import { fontStyles } from "../../configs/fontStyle";

export const styles = StyleSheet.create({
    primaryButton: {
        width: 270,
        height: 45,
        backgroundColor: Colors.green_sap,
        borderRadius: 8,
        justifyContent: 'center'
    },

    secondaryButton: {
        width: 270,
        height: 45,
        backgroundColor: Colors.white,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: Colors.green_sap,
        justifyContent: 'center'
    },

    primarySmallButton: {
        width: 103,
        height: 26,
        backgroundColor: Colors.green_sap,
        borderRadius: 8,
        justifyContent: 'center'
    },

    disabledPrimarySmallButton: {
        width: hp('20%'),
        height: 26,
        backgroundColor: Colors.grey,
        borderRadius: 8,
        justifyContent: 'center'
    },

    secondarySmallButton: {
        width: 103,
        height: 26,
        backgroundColor: Colors.white,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.green_sap,
        justifyContent: 'center'
    },

    dangerSmallButton: {
        width: 103,
        height: 26,
        backgroundColor: Colors.alburn,
        borderRadius: 8,
        justifyContent: 'center'
    },

    primaryText: {
        ...fontStyles.button,
        color: Colors.white,
        textAlign: 'center'
    },

    secondaryText: {
        ...fontStyles.button,
        color: Colors.green_hunter,
        textAlign: 'center',
    },

    primarySmallText: {
        ...fontStyles.smallButton,
        color: Colors.white,
        textAlign: 'center',
    },

    secondarySmallText: {
        ...fontStyles.smallButton,
        color: Colors.green_hunter,
        textAlign: 'center',
    },

    dangerSmallText: {
        ...fontStyles.smallButton,
        color: Colors.white,
        textAlign: 'center',
    },
})
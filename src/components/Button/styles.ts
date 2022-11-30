import { StyleSheet } from "react-native";
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
        justifyContent: 'center'
    },

    primarySmallButton: {
        width: 103,
        height: 26,
        backgroundColor: Colors.green_sap,
        borderRadius: 8,
        justifyContent: 'center'
    },

    secondarySmallButton: {
        width: 103,
        height: 26,
        backgroundColor: Colors.white,
        borderRadius: 8,
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
        color: Colors.green_hunder,
        textAlign: 'center',
    },

    primarySmallText: {
        ...fontStyles.smallButton,
        color: Colors.white,
        textAlign: 'center',
    },

    secondarySmallText: {
        ...fontStyles.smallButton,
        color: Colors.green_hunder,
        textAlign: 'center',
    },

    dangerSmallText: {
        ...fontStyles.smallButton,
        color: Colors.white,
        textAlign: 'center',
    },
})
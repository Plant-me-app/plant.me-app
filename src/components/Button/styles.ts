import { StyleSheet } from "react-native";
import { Colors } from "../../configs/colors";

export const styles = StyleSheet.create({
    primaryButton: {
        width: 270,
        height: 45,
        backgroundColor: Colors.green_sap,
        borderRadius: 8,
        justifyContent: 'center'
    },
    
    primaryText: {
        color: Colors.white,
        textAlign: 'center',
    },

    secondaryButton: {
        width: 270,
        height: 45,
        backgroundColor: Colors.white,
        borderRadius: 8,
        justifyContent: 'center'
    },
    
    secondaryText: {
        color: Colors.green_hunder,
        textAlign: 'center',
    }
})
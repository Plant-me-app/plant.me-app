import { StyleSheet } from "react-native";
import { Size } from "../../configs/sizes";

export const styles = StyleSheet.create({
    leafButton: {
        width: Size.SIZE_38,
        height: Size.SIZE_38,
        borderRadius: Size.SIZE_30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    leafIcon: { 
        width: Size.SIZE_16, 
        height: Size.SIZE_18
    }
})
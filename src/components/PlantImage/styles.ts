import { StyleSheet } from "react-native";
import { Colors } from "../../configs/colors";
import { Size } from "../../configs/sizes";

export const styles = StyleSheet.create({
    container: {
        width: 111,
        height: 111,
        backgroundColor: Colors.grey_light,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70,
        alignSelf: 'center'
    },
    pencilContainer: {
        position: 'absolute',
        left: 80,
        top: 85,
        width: 25,
        height: 25,
        backgroundColor: Colors.green_sap,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pencil: {
        width: 13, 
        height: 13
    },
    leafIcon: { 
        width: Size.SIZE_16, 
        height: Size.SIZE_18
    }
})
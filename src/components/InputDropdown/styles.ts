import { StyleSheet } from "react-native";
import { Colors } from "../../configs/colors";

export const styles = StyleSheet.create({
    container: {
        width: 190,
        alignSelf: 'center'
    },

    dropDownContainer: {
        padding: 5
    },

    itemsContainer: {
        maxHeight: 140
    },

    input: {
        height: 41,
        width: 250,
        padding: 10,
        backgroundColor: Colors.grey_light,
        borderRadius: 8
    },

    item: {
        padding: 12,
        marginTop: 3,
        backgroundColor: "#F2F2F2",
        borderColor: "#F2F2F2",
        borderWidth: 1,
        borderRadius: 5,
    },

    dropDownSearch: {
        padding: 12,
        borderWidth: 1,
        backgroundColor: "#F2F2F2",
        borderColor: "#F2F2F2",
        borderRadius: 5,
    },

    itemText: {
        color: "#222"
    }
})
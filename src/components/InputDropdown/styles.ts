import { StyleSheet } from "react-native";
import { Colors } from "../../configs/colors";
import { fontStyles } from "../../configs/fontStyle";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
    },
    
    inputContainer: {
        width: 250,
        paddingTop: 24,
    },

    dropDownContainer: {
        paddingTop: 5,
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
    },

    title: {
        ...fontStyles.textInput,
        paddingBottom: 7,
    }
})
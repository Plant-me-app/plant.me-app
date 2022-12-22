import { StyleSheet } from "react-native";
import { Colors } from "../../configs/colors";
import { fontStyles } from "../../configs/fontStyle";
import { Size } from "../../configs/sizes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.green_hunter
    },
    buttonContainer: {
        marginTop: 100,
        alignSelf: 'center'
    },
    body: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: Size.SIZE_20,
        borderTopRightRadius: Size.SIZE_20,
    },
    header: {
        height: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        ...fontStyles.header,
        color: Colors.white,
        fontSize: Size.SIZE_40,
        paddingTop: 50
    }
})
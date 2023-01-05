import { StyleSheet } from "react-native";
import { Colors } from "../../configs/colors";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { fontStyles } from "../../configs/fontStyle";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: hp("15%")
    },

    headerTitle: {
        ...fontStyles.header,
        color: Colors.dark,
        paddingTop: hp("3%"),
        fontSize: hp("4%"),
    }
})
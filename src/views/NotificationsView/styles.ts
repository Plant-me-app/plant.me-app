import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { Colors } from "../../configs/colors";
import { fontStyles } from "../../configs/fontStyle";
import { Size } from "../../configs/sizes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.green_hunter
    },

    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: hp("13%"),
        marginTop: hp("3%"),
    },
    
    body: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: Size.SIZE_20,
        borderTopRightRadius: Size.SIZE_20
    },

    headerTitle: {
        ...fontStyles.header,
        color: Colors.white,
        fontSize: hp("5%"),
        alignSelf: 'center',
    },

    bodyTitle: {
        ...fontStyles.header2,
        fontSize: hp('2.5%')
    },
})
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { Colors } from "../../configs/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },

    input: {
        backgroundColor: Colors.grey_light,
        height: hp("6%"),
        width: wp("70%"),
        borderTopRightRadius: 11,
        borderBottomRightRadius: 11,
    },

    searchIconContainer: {
        backgroundColor: Colors.grey_light,
        height: hp("6%"),
        width: wp("10%"),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 11,
        borderBottomLeftRadius: 11,
    },

    searchIcon: {
        width: wp("5%"),
        height: wp("5%"),
    }
})
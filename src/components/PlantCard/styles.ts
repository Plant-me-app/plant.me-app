import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { Colors } from "../../configs/colors";

export const styles = StyleSheet.create({
    container: {
        width: wp('40$'),
        height: hp('30%'),
        backgroundColor: 'rgba(rgba(167, 201, 87, 0.2))',
        margin: wp('5%'),
    },
})
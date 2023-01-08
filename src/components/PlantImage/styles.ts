import { StyleSheet } from "react-native";
import { Colors } from "../../configs/colors";
import { Size } from "../../configs/sizes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    container: {
        width: hp('12%'),
        height: hp('12%'),
        backgroundColor: Colors.grey_light,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70,
        alignSelf: 'center',
        marginTop: hp('5%')
    },
    containerSelected: {
        width: hp('12%'),
        height: hp('12%'),
        backgroundColor: 'rgba(167, 201, 87, 0.21)',
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: hp('5%')
    },
    pencilContainer: {
        position: 'relative',
        left: wp('7%'),
        top: hp('0.1%'),
        width: wp('6%'),
        height: wp('6%'),
        backgroundColor: Colors.green_sap,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: wp('12%'),
        height: hp('9%'),
        top: hp('1.5%'),
    },
    imageSelected: {
        width: wp('20%'),
        height: hp('9%'),
        top: hp('1.5%'),
    },
    pencil: {
        width: wp('3%'), 
        height: wp('3%')
    },
    leafIcon: { 
        width: Size.SIZE_16, 
        height: Size.SIZE_18
    }
})
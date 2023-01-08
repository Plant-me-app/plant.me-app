import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { Colors } from "../../configs/colors";
import { fontStyles } from "../../configs/fontStyle";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: wp('40%'),
        height: hp('30%'),
        margin: wp('4%'),
        backgroundColor: 'rgba(rgba(167, 201, 87, 0.2))',
        borderRadius: wp('3%')
    },

    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: wp('40%'),
        height: hp('18%'),
    },
    
    body: {
        flex: 1,
        borderBottomEndRadius: wp('3%'),
        borderBottomStartRadius: wp('3%'),
        backgroundColor: 'rgba(167, 201, 87, 0.5)',
        padding: wp('3%')
    },

    img: {
        width: hp('10%'),
        height: wp('20%')
    },

    title: {
        ...fontStyles.header,
        fontSize: wp('5%')
    },

    info: {
        fontSize: hp('1.8%'),
        paddingBottom: hp('0.1%')
    },
})
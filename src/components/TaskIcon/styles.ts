import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { Colors } from "../../configs/colors";
import { fontStyles } from "../../configs/fontStyle";

export const styles = StyleSheet.create({
    iconSubtitle: {
        ...fontStyles.subtitle,
        paddingTop: hp('1%'),
        paddingBottom: hp('1%')
    },

    taskIcon: {
        width: wp('10%'),
        height: wp('10%')
    },

    taskContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },

    statusBar: {
        width: wp('12%'),
        height: hp('1.5%'),
        backgroundColor: Colors.green_sap,
        borderRadius: 30,
    },

   

})
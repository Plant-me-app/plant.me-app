import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { Colors } from "../../configs/colors";
import { fontStyles } from "../../configs/fontStyle";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },

    iconContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },

    header: {
        width: wp('100%'),
        height: hp('65%'),
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    headerIcons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: hp('5%')
    },

    body: {
        flex: 1,
        width: wp('100%'),
        backgroundColor: "rgba(167, 201, 87, 0.2)",
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    bodyContainer: {
        width: wp('100%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    historyContainer: {

    },

    plantImg: {
        width: wp('55%'),
        height: wp('55%'),
    },

    title: {
        ...fontStyles.header,
        fontSize: wp('10%')
    },

    detailsIcons: {
        width: wp('12%'),
        height: wp('12%')
    },

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
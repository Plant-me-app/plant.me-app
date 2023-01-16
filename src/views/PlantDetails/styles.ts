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
        height: hp('60%'),
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: hp('5%')
    },

    headerIcons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: hp('1%')
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

    plantImg: {
        width: wp('50%'),
        height: wp('50%')
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

    link: {
        ...fontStyles.link
    },

    backBtnContainer: {
        height: hp('3%'),
        marginTop: hp('5%'),
        marginLeft: wp('3%')
    },

    backLabel: {
        flexDirection: 'row'
    },

    infoContainer: {
        paddingLeft: wp('5%'),
        paddingRight: wp('3%')
    },

    infoTitle: {
        ...fontStyles.modal,
        textAlign: 'center'
    },

    infoHeader: {
        paddingBottom: hp('3%')
    },

    infoContentText: {
        ...fontStyles.modalInfo,
        paddingBottom: hp('1%')
    }

})
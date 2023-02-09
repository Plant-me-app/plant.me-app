import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { Colors } from "../../../configs/colors";
import { fontStyles } from "../../../configs/fontStyle";

export const styles = StyleSheet.create({
    header: {
        paddingBottom: hp('3%')
    },

    headerTitle: {
        ...fontStyles.modal,
        textAlign: 'center',
        fontSize: hp('2.5%')
    },

    body: {
        alignItems: 'center',
        paddingBottom: hp('1%')
    },

    history: {
        ...fontStyles.modalInfo,
        textAlign: 'center',
        marginBottom: hp('3%')
    },

    success: {
        ...fontStyles.modalInfo,
        fontSize: wp('5%'),
        textAlign: 'center',
        marginBottom: hp('3%'),
        width: wp('70%')
    },

    btnTitle: {
        ...fontStyles.smallButton,
        color: Colors.white,
        fontSize: hp('2%')
    },

    icon: {
        width: hp('7%'),
        height: hp('7%'),
        position: 'absolute',
        left: hp('2%'),
        bottom: hp('1%')
    },

    deleteButtons: {
        flexDirection: 'row',
        width: wp('80%'),
        justifyContent: 'space-evenly',
    },

    deleteText: {
        ...fontStyles.modalInfo,
        fontSize: wp('4%'),
        textAlign: 'center',
        marginBottom: hp('3%'),
        width: wp('80%')
    },
})

export const customStyles = (buttonColor) => StyleSheet.create({

    button: {
        backgroundColor: buttonColor,
        width: hp('20%'),
        height: hp('4%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp('2%')
    },
})
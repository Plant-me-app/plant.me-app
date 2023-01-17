import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { Colors } from "../../../configs/colors";
import { fontStyles } from "../../../configs/fontStyle";

export const styles = StyleSheet.create({
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
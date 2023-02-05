import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { Colors } from "../../../configs/colors";
import { fontStyles } from "../../../configs/fontStyle";

export const styles = StyleSheet.create({
    bodyContainer: {
        paddingLeft: wp('5%'),
        paddingRight: wp('3%')
    },

    title: {
        ...fontStyles.modal,
        textAlign: 'center'
    },

    header: {
        paddingBottom: hp('3%')
    },

    infoContentText: {
        ...fontStyles.modalInfo,
        paddingBottom: hp('1%')
    },

    progressCircle: {
        width: wp('20%'),
        height: wp('20%'),
        borderColor: Colors.green_hunter,
        borderWidth: 10,
        borderRadius: wp('100%'),
        borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
        transform:[{rotateZ: '50deg'}]
    },

    scoreText: {
        fontSize: 40,
        color: Colors.green_hunter,
        fontWeight: "800"
    }

})
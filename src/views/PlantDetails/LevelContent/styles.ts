import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { Colors } from "../../../configs/colors";
import { fontStyles } from "../../../configs/fontStyle";

export const styles = StyleSheet.create({
    bodyContainer: {
        width: wp('100%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: hp('2%'),
    },

    title: {
        ...fontStyles.modal,
        textAlign: 'center',
        fontSize: hp('2.5%')
    },

    header: {
        
    },

    infoContentText: {
        ...fontStyles.modalInfo,
        paddingBottom: hp('1%')
    },

    progressCircle: {
        paddingLeft: wp('2%')
    },

    scoreText: {
        fontSize: wp('12%'),
        color: Colors.green_hunter,
        fontWeight: "800"
    },

    content: {
        width: wp('65%')
        
    },

    contentText: {
        ...fontStyles.modalInfo,
        fontSize: wp('4%')
    }

})
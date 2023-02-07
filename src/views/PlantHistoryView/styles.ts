import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { Colors } from "../../configs/colors";
import { fontStyles } from "../../configs/fontStyle";
import { Size } from "../../configs/sizes";

export const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        backgroundColor: Colors.green_hunter
    },
    
    body: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: Size.SIZE_20,
        borderTopRightRadius: Size.SIZE_20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bodyTitle: {
        ...fontStyles.header2,
        fontSize: hp('2.5%')
    },

    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: hp("10%"),
    },

    headerTitle: {
        ...fontStyles.header,
        color: Colors.white,
        paddingBottom: hp("3%"),
        fontSize: hp("4%"),
        alignSelf: 'center',
    },

    backBtnContainer: {
        height: hp('3%'),
        marginTop: hp('5%'),
        marginLeft: wp('3%')
    },

    backLabel: {
        flexDirection: 'row'
    },

    link: {
        ...fontStyles.link,
        color: Colors.white
    },
})
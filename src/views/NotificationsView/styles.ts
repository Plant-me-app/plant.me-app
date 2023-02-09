import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { Colors } from "../../configs/colors";
import { fontStyles } from "../../configs/fontStyle";
import { Size } from "../../configs/sizes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.green_hunter
    },

    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: hp("13%"),
        marginTop: hp("3%"),
    },
    
    body: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: Size.SIZE_20,
        borderTopRightRadius: Size.SIZE_20,
        alignItems: 'center',
        paddingTop: hp('5%')
    },

    headerTitle: {
        ...fontStyles.header,
        color: Colors.white,
        fontSize: hp("5%"),
        alignSelf: 'center',
    },

    bodyTitle: {
        ...fontStyles.header2,
        fontSize: hp('2.5%')
    },

    card: {
        height: hp('12%'),
        width: wp('90%'),
        marginBottom: hp('2%'),
        borderRadius: wp('3%'),
        backgroundColor: "rgba(167, 201, 87, 0.2)",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    cardTitle: {
        ...fontStyles.default,
        fontWeight: '700',
        paddingBottom: hp('1%')
    },
    
    cardText: {
        ...fontStyles.subtitle,
        letterSpacing: 1
    },

    icon: {
        width: wp('15%'),
        height: wp('10%')
    },

    cardContent: {
        width: wp('65%'),
    }
})
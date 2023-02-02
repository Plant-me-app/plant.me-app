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
    },
    headerTitle: {
        ...fontStyles.header,
        color: Colors.white,
        fontSize: hp("5%"),
        alignSelf: 'center',
    },
    level: {
        ...fontStyles.header2,
        textAlign: 'center',
        paddingTop: hp('3%')
    },
    profilePicture: {
        width: hp('18%'),
        height: hp('18%')
    },
    profilePicContainer: {
        alignItems: 'center',
        paddingTop: hp('3%')
    },
    email: {
        ...fontStyles.default,
        textAlign: 'center',
        paddingTop: hp('2%')
    },
    menuWrapper: {
        alignItems: 'center',
        paddingTop: hp('3%')
    },
    menuContainer: {
        width: wp('80'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: hp('2%')
    },
    menuTitle: {
        ...fontStyles.header2,
        fontWeight: '300',
        fontSize: hp('2%')
    },
    menuIcon: {
        width: hp('2.5%'),
        height: hp('2.5%')
    },
    line: {
        width: wp('80%'),
        borderBottomWidth: hp('0.1%'),
        borderBottomColor: Colors.grey,
        paddingTop: hp('2%')
    }
})
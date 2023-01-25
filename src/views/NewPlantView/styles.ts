import { StyleSheet } from "react-native";
import { Colors } from "../../configs/colors";
import { fontStyles } from "../../configs/fontStyle";
import { Size } from "../../configs/sizes";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    containerView: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.green_hunter
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: hp('5%'),
        alignItems: 'center'
    },
    body: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: Size.SIZE_20,
        borderTopRightRadius: Size.SIZE_20,
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: hp("15%"),
        marginTop: hp("3%"),
    },
    headerTitle: {
        ...fontStyles.header,
        color: Colors.white,
        paddingBottom: hp("3%"),
        fontSize: hp("4%"),
        alignSelf: 'center',
    },
    cancelBtnContainer: {
        height: hp('3%'),
        marginBottom: hp('1%'),
        marginLeft: wp('3%'),
    },
    cancelLink: {
        ...fontStyles.link,
        color: Colors.white
    },
    deleteLink: {
        ...fontStyles.link,
        color: Colors.alburn
    },
    confirmationModalText: {
        ...fontStyles.modal,
        textAlign: 'center',
        marginHorizontal: hp("5%")
    },
    confirmationModalButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: hp("5%"),
    }
})
import { StyleSheet } from "react-native";
import { Colors } from "../../configs/colors";
import { fontStyles } from "../../configs/fontStyle";
import { Size } from "../../configs/sizes";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    containerView: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.green_hunter
    },
    buttonContainer: {
        marginTop: hp('10%'),
        alignSelf: 'center'
    },
    body: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: Size.SIZE_20,
        borderTopRightRadius: Size.SIZE_20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: hp("15%")
    },
    headerTitle: {
        ...fontStyles.header,
        color: Colors.white,
        paddingTop: hp("3%"),
        fontSize: hp("4%"),
    }
})
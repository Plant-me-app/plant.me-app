import { StyleSheet } from "react-native";
import { Colors } from "../../configs/colors";
import { fontStyles } from "../../configs/fontStyle";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    wrappedContainer: {
        flex: 1
    },

    container: {
        width: wp('100%'),
        flexDirection: 'row',
        justifyContent: 'center',
    },
    
    inputContainer: {
        width: wp('70%'),
        paddingTop: hp('3%'),
    },

    dropDownContainer: {
        paddingTop: hp('1%'),
    },

    itemsContainer: {
        maxHeight: 140
    },

    input: {
        height: hp('%5'),
        width: wp('70%'),
        backgroundColor: Colors.grey_light,
        borderRadius: 8
    },

    item: {
        padding: hp('1.5%'),
        marginTop: hp('0.2%'),
        backgroundColor: "#F2F2F2",
        borderColor: "#F2F2F2",
        borderWidth: 1,
        borderRadius: 5,
    },

    dropDownSearch: {
        padding: hp('1.5%'),
        borderWidth: 1,
        backgroundColor: "#F2F2F2",
        borderColor: "#F2F2F2",
        borderRadius: 5,
    },

    itemText: {
        color: "#222"
    },

    title: {
        ...fontStyles.textInput,
        fontSize: wp('4%'),
        paddingBottom: hp('1.5%'),
    },

    headerTitle: {
        ...fontStyles.header,
        color: Colors.white,
    }
})
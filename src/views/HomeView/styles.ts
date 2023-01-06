import { StyleSheet } from "react-native";
import { Colors } from "../../configs/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { fontStyles } from "../../configs/fontStyle";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    
    emptyBody: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "90%"
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: hp("15%")
    },

    headerTitle: {
        ...fontStyles.header,
        color: Colors.dark,
        paddingTop: hp("3%"),
        fontSize: hp("4%"),
    },

    emptyImage: {
        width: hp('40%'),
        height: hp('40%')
    },

    emptyLabel: {
        ...fontStyles.defaultSemibold,
        color: Colors.grey,
        fontSize: hp('3%'),
        width: wp('70%'),
        textAlign: 'center'
    },

    arrowIcon: {
        width: wp('7%'),
        height: wp('7%'),
        left: wp('2%')
    }
})
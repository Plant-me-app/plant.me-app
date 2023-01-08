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

    body: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
        
    },
    
    scrollContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: hp('1%')
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
        width: hp('35%'),
        height: hp('35%')
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
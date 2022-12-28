import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { Colors } from "../../configs/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    contentContainer: {
        marginBottom: hp('3%')
    },
    header: {
        width: wp('15%'),
        height: hp('1%'),
        backgroundColor: Colors.grey,
        marginTop: hp('2%'),
        marginBottom: hp('3%'),
        borderRadius: 5,
        alignSelf: 'center',
        
    },
    image: {
        width: wp('20%'),
        height: wp('23%'),
        margin: wp('4%')
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
    }
});
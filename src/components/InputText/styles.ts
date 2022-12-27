import { StyleSheet } from "react-native";
import { Colors } from "../../configs/colors";
import { fontStyles } from "../../configs/fontStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    wrappedContainer: {
      flex: 1,
    },

    container: {
      width: wp('100%'),
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: hp('5%')
    },
    
    inputContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },

    input: {
        height: hp('5%'),
        width: wp('70%'),
        padding: wp('3%'),
        backgroundColor: Colors.grey_light,
        borderRadius: 8
      },

    title: {
      ...fontStyles.textInput,
      fontSize: wp('4%'),
      paddingBottom: hp('1.5%'),
    }
})
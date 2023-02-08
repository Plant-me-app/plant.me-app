import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Colors } from "../../../configs/colors";
import { fontStyles } from "../../../configs/fontStyle";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },

    historyList: {
        paddingTop: hp('5%')
    },
    
    historyText: {
        ...fontStyles.subtitle,
        fontSize: hp('2.5%'),
        fontWeight: "300",
        textAlign: 'center',
        paddingBottom: hp('3%')
    }
})
import { StyleSheet } from "react-native";
import { Colors } from "../../configs/colors";
import { fontStyles } from "../../configs/fontStyle";

export const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 156
    },
    
    inputContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },

    input: {
        height: 41,
        width: 250,
        padding: 10,
        backgroundColor: Colors.grey_light,
        borderRadius: 8
      },

    title: {
      ...fontStyles.textInput,
      paddingBottom: 7,
    }
})
import { StyleSheet } from "react-native";
import { Colors } from "../../configs/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { fontStyles } from "../../configs/fontStyle";

export const styles = StyleSheet.create({
  splashContainer: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp("12%"),
    backgroundColor: Colors.white
  },
  img: {
    alignSelf: 'center',
  },
  title: {
    ...fontStyles.header,
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: hp("3%"),
  },
  text: {
    ...fontStyles.default,
    alignSelf: 'center',
    textAlign: 'center',
  },
  doneBtn: {
    backgroundColor: Colors.green_sap,
    borderRadius: 8,
    height: hp("5%"),
    width: wp("50%"),
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.white,
    ...fontStyles.smallButton,
    marginRight: hp("10%"),
  },
  nextLink: {
    ...fontStyles.link,
    color: Colors.green_hunter,
    alignSelf: 'flex-end'
  },
  skipLink: {
    ...fontStyles.link,
    color: Colors.green_hunter,
    flex: 1,
    alignSelf: 'flex-start'
  },
  activeDotStyle: {
    backgroundColor: Colors.green_hunter,
    marginBottom: hp("20%")
  },
  dotStyle: {
    backgroundColor: Colors.grey_light,
    marginBottom: hp("20%")
  }
})
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
    width: wp('95%'),
    alignSelf: 'center',
    textAlign: 'center',
  },
  buttonWrapper: {
    width: wp('100%'),
    left: wp('4.5%'),
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  doneBtnContainer: {
    backgroundColor: Colors.green_sap,
    borderRadius: 8,
    height: hp("5%"),
    width: wp("50%"),
    justifyContent: 'center',
  },
  doneBtnText: {
    ...fontStyles.smallButton,
    textAlign: 'center',
    color: Colors.white,
  },
  nextLink: {
    ...fontStyles.link,
    color: Colors.green_hunter,
    alignSelf: 'flex-end'
  },
  skipLink: {
    ...fontStyles.link,
    color: Colors.green_hunter,
    alignSelf: 'flex-start'
  },
  activeDotStyle: {
    backgroundColor: Colors.green_hunter,
    marginBottom: hp("20%"),
    width: wp("5%")
  },
  dotStyle: {
    backgroundColor: Colors.grey_light,
    marginBottom: hp("20%")
  }
})
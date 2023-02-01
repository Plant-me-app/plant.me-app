import React from "react";
import { View, Text, Image, AsyncStorage } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { styles } from "./styles";
import { Colors } from "../../configs/colors";
import { Labels } from "../../constants/label.constants";

const SplashView = ({ navigation }): React.ReactElement => {
  const slides = [
    {
      key: "s1",
      title: Labels.splashScreenTitle1,
      text: Labels.splashScreenText1,
      image: require("../../../src/assets/images/SplashScreen/splash1.png"),
      backgroundColor: Colors.white,
    },
    {
      key: "s2",
      title: Labels.splashScreenTitle2,
      text: Labels.splashScreenText2,
      image: require("../../../src/assets/images/SplashScreen/splash2.png"),
      backgroundColor: Colors.white,
    },
    {
      key: "s3",
      title: Labels.splashScreenTitle3,
      text: Labels.splashScreenText3,
      image: require("../../../src/assets/images/SplashScreen/splash3.png"),
      backgroundColor: Colors.white,
    },
  ];

  const onDone = () => {
    navigation.replace("TabNavigator");
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.splashContainer}>
        <Image style={styles.img} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View>
        <Text style={styles.nextLink}>{Labels.splashScreenNext}</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonWrapper}>
        <View style={styles.doneBtnContainer}>
          <Text style={styles.doneBtnText}>{Labels.splashScreenDone}</Text>
        </View>
      </View>
    );
  };

  const renderSkipButton = () => {
    return <Text style={styles.skipLink}>{Labels.splashScreenSkip}</Text>;
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={onDone}
      onSkip={onDone}
      showSkipButton={true}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      renderSkipButton={renderSkipButton}
      activeDotStyle={styles.activeDotStyle}
      dotStyle={styles.dotStyle}
    />
  );
};

export default SplashView;

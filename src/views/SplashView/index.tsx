import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { styles } from './styles';
import { Colors } from "../../configs/colors";
import { Labels } from "../../constants/label.constants";
import Button from '../../components/Button';
import { buttonTypes } from "../../constants/buttonsTypes.enum";
import RootNavigator from '../../routes/navigation/rootNavigator';
import App from '../../../App';

const SplashView = ({showSplashScreen, setSplashScreen}): React.ReactElement => {
	console.log("showSplashScreen:", showSplashScreen)

	const slides = [{
		key: 's1',
		title: Labels.splashScreenTitle1,
		text: Labels.splashScreenText1,
		image: require('../../../src/assets/images/SplashScreen/splash1.png'),
		backgroundColor: Colors.white,
	},
	{
		key: 's2',
		title: Labels.splashScreenTitle2,
		text: Labels.splashScreenText2,
		image: require('../../../src/assets/images/SplashScreen/splash2.png'),
		backgroundColor: Colors.white,
	},
	{
		key: 's3',
		title: Labels.splashScreenTitle3,
		text: Labels.splashScreenText3,
		image: require('../../../src/assets/images/SplashScreen/splash3.png'),
		backgroundColor: Colors.white,
	}];

	const onDone = () => {
    setSplashScreen(false);
		console.log("foi pra home");
		return <RootNavigator />;
  };

  const onSkip = () => {
    setSplashScreen(false);
		console.log("pulou");
		console.log("showSplashScreen:", showSplashScreen)
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
			<View>
      {/* <View style={styles.doneBtn}> 
        <Button 
					onPress={() => "clicou"}
					title={Labels.splashScreenDone}
					type={buttonTypes.Primary}
				/> */}
				<Text style={styles.doneBtn}>{Labels.splashScreenDone}</Text>
      </View>
    );
  };

	const renderSkipButton = () => {
    return (
        <Text style={styles.skipLink}>{Labels.splashScreenSkip}</Text>
    );
  };

	return (
		<AppIntroSlider
			data={slides}
			renderItem={renderItem}
			onDone={onDone}
			onSkip={onSkip}
			showSkipButton={true}
      renderNextButton={renderNextButton}
			renderDoneButton={renderDoneButton}
			renderSkipButton={renderSkipButton}
			activeDotStyle={styles.activeDotStyle}
			dotStyle={styles.dotStyle}
		/>
	)
}

export default SplashView;
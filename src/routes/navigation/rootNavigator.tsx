import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import SplashView from "../../views/SplashView";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreenStack = createNativeStackNavigator();

const RootNavigator = (): React.ReactElement => {
  const [isAppFirstLaunch, setIsAppFirstLaunch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // AsyncStorage.clear();
      const appData = await AsyncStorage.getItem("isAppFirstLaunch");
      if (appData == null) {
        setIsAppFirstLaunch(true);
        AsyncStorage.setItem("isAppFirstLaunch", "false");
      } else {
        setIsAppFirstLaunch(false);
      }
    };
    fetchData().catch(console.error);
  }, []);

  return (
    isAppFirstLaunch != null && (
      <NavigationContainer>
        <SplashScreenStack.Navigator screenOptions={{ headerShown: false }}>
          {isAppFirstLaunch && (
            <SplashScreenStack.Screen
              name="SplashScreen"
              component={SplashView}
            />
          )}
          <SplashScreenStack.Screen
            name="TabNavigator"
            component={TabNavigator}
          />
        </SplashScreenStack.Navigator>
      </NavigationContainer>
    )
  );
};

export default RootNavigator;

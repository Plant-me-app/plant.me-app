import React, { useEffect, useState } from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import SplashView from "../../views/SplashView";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const RootNavigator = (): React.ReactElement => {
  const [isAppFirstLaunch, setIsAppFirstLaunch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // AsyncStorage.clear();
      const appFirstLaunch = await AsyncStorage.getItem("isAppFirstLaunch");
      if (appFirstLaunch === null) {
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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAppFirstLaunch && (
            <Stack.Screen name="SplashScreen" component={SplashView} />
          )}
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default RootNavigator;

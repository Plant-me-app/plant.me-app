import React from "react";
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import SplashView from "../../views/SplashView";

const Stack = createNativeStackNavigator();

const RootNavigator = (): React.ReactElement => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SplashScreen" component={SplashView} />
                <Stack.Screen name="TabNavigator" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
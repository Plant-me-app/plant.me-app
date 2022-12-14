import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from "./TabNavigator";

const RootNavigator = (): React.ReactElement => {

    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
};

export default RootNavigator;
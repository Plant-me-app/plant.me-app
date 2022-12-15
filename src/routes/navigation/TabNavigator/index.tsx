import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../../../configs/colors";

import HomeView from "../../../views/HomeView";
import NewPlantView from "../../../views/NewPlantView";
import NotificationView from "../../../views/NotificationsView";
import ProfileView from "../../../views/ProfileView";
import LeafButton from "../../../components/LeafButton";
import { Size } from "../../../configs/sizes";

const Tab = createBottomTabNavigator();

const TabNavigator = (): React.ReactElement => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarShowLabel: false, headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home-filled"
              size={Size.SIZE_36}
              color={focused ? Colors.green_android : Colors.green_hunter}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notificações"
        component={NotificationView}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="notifications-sharp"
              size={Size.SIZE_30}
              color={focused ? Colors.green_android : Colors.green_hunter}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileView}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user-alt"
              size={Size.SIZE_28}
              color={focused ? Colors.green_android : Colors.green_hunter}
            />
          ),
        }}
      />
      <Tab.Screen
        name="New Plant"
        component={NewPlantView}
        options={{
          tabBarIcon: ({ focused }) => <LeafButton isFocused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

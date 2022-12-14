import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../../../configs/colors";

import HomeView from "../../../views/HomeView";
import NewPlantView from "../../../views/NewPlantView";
import NotificationView from "../../../views/NotificationsView";
import ProfileView from "../../../views/ProfileView";
import LeafButton from "../../../components/LeafButton";

const Tab = createBottomTabNavigator();

const TabNavigator = (): React.ReactElement => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home-filled"
              size={26}
              color={focused ? Colors.green_android : Colors.green_hunter}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notificações"
        component={NotificationView}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="notifications-sharp"
              size={26}
              color={focused ? Colors.green_android : Colors.green_hunter}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileView}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user-alt"
              size={24}
              color={focused ? Colors.green_android : Colors.green_hunter}
            />
          ),
        }}
      />
      <Tab.Screen
        name="New Plant"
        component={NewPlantView}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <LeafButton isFocused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

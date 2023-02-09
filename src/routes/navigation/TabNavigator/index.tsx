import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../../../configs/colors";
import { TaskTypes } from "../../../constants/taskTypes.enum";
import { Size } from "../../../configs/sizes";

import HomeView from "../../../views/HomeView";
import NewPlantView from "../../../views/NewPlantView";
import NotificationView from "../../../views/NotificationsView";
import ProfileView from "../../../views/ProfileView";
import LeafButton from "../../../components/LeafButton";
import PlantDetails from "../../../views/PlantDetails";
import PlantHistoryView from "../../../views/PlantHistoryView";
import TaskHistory from "../../../views/PlantHistoryView/TaskHistory";
import { PlantContextProvider } from "../../../contexts/PlantContext";

const BottomTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const historyTabs = [
  { name: "WaterView", label: "Água", task: TaskTypes.Water },
  { name: "SoilView", label: "Terra", task: TaskTypes.Soil },
  { name: "LightView", label: "Luz", task: TaskTypes.Light },
  { name: "FertilizerView", label: "Adubo", task: TaskTypes.Fertilizer },
];

function HistoryTopTabScreen() {
  return (
    <>
      <PlantHistoryView />
      <TopTab.Navigator
        id="TopTab"
        screenOptions={{
          lazy: false,
          tabBarActiveTintColor: Colors.green_phthalo,
          tabBarIndicatorStyle: { backgroundColor: Colors.green_phthalo },
          tabBarStyle: {
            backgroundColor: Colors.white,
          },
        }}
      >
        {historyTabs.map(({ name, label, task }) => {
          return (
            <TopTab.Screen
              key={label}
              name={name}
              component={TaskHistory}
              initialParams={{ task: task }}
              options={{
                tabBarLabel: label,
              }}
            />
          );
        })}
      </TopTab.Navigator>
    </>
  );
}

function HomeStackScreen() {
  return (
    <PlantContextProvider>
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="HomeView" component={HomeView} />
        <HomeStack.Screen name="PlantDetails" component={PlantDetails} />
        <HomeStack.Screen name="EditPlant" component={NewPlantView} />
        <HomeStack.Screen name="PlantHistory" component={HistoryTopTabScreen} />
      </HomeStack.Navigator>
    </PlantContextProvider>
  );
}

const TabNavigator = (): React.ReactElement => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home-filled"
              size={Size.SIZE_36}
              color={focused ? Colors.green_android : Colors.green_hunter}
            />
          ),
        }}
      />
      <BottomTab.Screen
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
      <BottomTab.Screen
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
      <BottomTab.Screen
        name="New Plant"
        component={NewPlantView}
        initialParams={{ edition: false }}
        options={{
          tabBarIcon: ({ focused }) => <LeafButton isFocused={focused} />,
          unmountOnBlur: true,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;

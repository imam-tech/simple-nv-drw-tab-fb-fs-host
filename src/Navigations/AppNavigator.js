import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../Screens/DashboardScreen";
import FeedScreen from "../Screens/FeedScreen";
import SettingNavigator from "./SettingNavigator";
import ScholarFeedScreen from "../Screens/ScholarScreens/ScholarFeedScreen";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      options={{
        activeBackgroundColor: "#ffd600",
        activeTintColor: "#eee",
        inactiveBackgroundColor: "#eee",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="DashboardScreen " component={DashboardScreen} />
      <Tab.Screen name="ScholarScreen " component={ScholarFeedScreen} />
      <Tab.Screen name="FeedScreen " component={FeedScreen} />
      <Tab.Screen name="Setting " component={SettingNavigator} />
    </Tab.Navigator>
  );
}

export default AppNavigator;

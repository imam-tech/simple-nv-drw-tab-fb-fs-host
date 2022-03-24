import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppNavigator from "./src/Navigations/AppNavigator";
import useAuthentication from "./src/Api/useAuthentication";
import FeedScreen from "./src/Screens/FeedScreen";
import LoginScreen from './src/Screens/LoginScreen'

const Drawer = createDrawerNavigator();

export default function App() {
  const user = useAuthentication();
  return (
    <NavigationContainer>
      <NativeBaseProvider>
      {user ?  
        <Drawer.Navigator initialRouteName="Dashboard">
          <Drawer.Screen name="App" component={AppNavigator} />
          <Drawer.Screen name="Feed" component={FeedScreen} />
        </Drawer.Navigator>
      : <LoginScreen />}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
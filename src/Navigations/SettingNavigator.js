import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SettingAccountScreen from '../Screens/SettingScreens/SettingAccountScreen';
import SettingPasswordScreen from '../Screens/SettingScreens/SettingPasswordScreen';
import SettingScreen from '../Screens/SettingScreens/SettingScreen';

const Stack = createNativeStackNavigator();
const StackNavigator= () => (
<Stack.Navigator>
    <Stack.Screen name='setting' component={SettingScreen}
    options={{
        headerShown:false
    }} />
    <Stack.Screen name='account' component={SettingAccountScreen} />  
    <Stack.Screen name='password' component={SettingPasswordScreen} />  
</Stack.Navigator>
)

function SettingNavigator() {
  return (
    <StackNavigator/>
  )
}

export default SettingNavigator
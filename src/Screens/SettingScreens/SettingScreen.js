import React from 'react'
import { Box,Button,Text } from 'native-base'

function SettingScreen({navigation}) {
  return (
    <Box>
        <Text>This is setting Screen</Text>
        <Button onPress={()=>navigation.navigate('account')}> Account</Button>
        <Button onPress={()=>navigation.navigate('password')}> Password</Button>
    </Box>
  )
}

export default SettingScreen
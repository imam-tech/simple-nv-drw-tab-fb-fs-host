import { Button, Text, View } from 'native-base'
import React from 'react'
import { signOut } from 'firebase/auth';
import useAuthentication from '../Api/useAuthentication'
import { auth } from '../../config/firebase'

function DashboardScreen() {
  const user = useAuthentication();

  const onHandleLogout = () => {
    try {
      signOut(auth)
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Text>Hai {user?.email}</Text>
      <Text>DashboardScreenasd</Text>
      <Button maxWidth={200} onPress={() => onHandleLogout()}>Logout</Button>
    </View>
  )
}

export default DashboardScreen
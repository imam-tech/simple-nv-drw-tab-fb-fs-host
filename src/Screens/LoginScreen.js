import React, { useState } from 'react'
import {Box, Button, Center, Input, Text} from 'native-base'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

import AppButton from '../Components/AppButton'

function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (result) console.log("SUCCESS");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box safeArea>
      <Center>
        <Input
          width={200}
          placeholder="email"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          width={200}
          placeholder="password"
          type="password"
          onChangeText={(text) => setPassword(text)}
        />
        <Button m="2" maxW={200} onPress={() => handleLogin()}>
          Login
        </Button>
      </Center>
    </Box>
  )
}

export default LoginScreen
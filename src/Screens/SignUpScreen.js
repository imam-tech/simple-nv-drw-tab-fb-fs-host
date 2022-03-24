import React, { useState } from "react";
import { Box, Button, Center, Input, Text, View } from "native-base";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

function SignUpScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignUp = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
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
    <Box>
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
        <Button m="2" maxW={200} onPress={() => handleSignUp()}>
          Daftar
        </Button>
      </Center>
    </Box>
  );
}

export default SignUpScreen;

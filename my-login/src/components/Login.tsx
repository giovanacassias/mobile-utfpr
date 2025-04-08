import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`Username: ${userName}`);
    console.log(`Password: ${password}`);
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;

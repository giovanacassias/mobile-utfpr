import { View, Text, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";

const Reset = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);

  useEffect(() => {
    //console.log("Componente montado ou password alterada");
    let isValid = false;
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/;

    if (regex.test(password)) {
      //console.log("Senha válida!");
      //console.log(password);
      isValid = true;
      //console.log(isValid);
      setPasswordIsValid(true);
    }
    if (password !== passwordConfirmation) {
      isValid = false;
      //console.log(isValid);
    }
    setPasswordIsValid(isValid);
    console.log(passwordIsValid);
  }, [password, passwordConfirmation]);

  const handleReset = () => {
    console.log(`Password: ${password}`);
    console.log(`Password confirmation: ${passwordConfirmation}`);
    console.log(passwordIsValid);
  };

  return (
    <View>
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      {}
      <TextInput
        placeholder="Password confirmation"
        value={passwordConfirmation}
        secureTextEntry
        onChangeText={(text) => setPasswordConfirmation(text)}
      />

      {/* {!passwordIsValid && <Text>Senha inválida!</Text>} */}

      {(password.length > 0 || passwordConfirmation.length > 0) &&
        (passwordIsValid ? (
          <Text style={{ color: "green" }}>A senha é válida!</Text>
        ) : (
          <Text style={{ color: "red" }}>Senha inválida!</Text>
        ))}

      {passwordIsValid ? (
        <Button title="Reset password" disabled={false} onPress={handleReset} />
      ) : (
        <Button title="Reset password" disabled />
      )}
    </View>
  );
};

export default Reset;

//PRIMEIRA VERSÃO DO CÓDIGO

/*     if (regex.test(password)) {
      console.log("Senha válida!");
      console.log(password);
      isValid = true;
      console.log(isValid);
      setPasswordIsValid(true);
    } else {
      console.log("Senha continua inválida!");
      isValid = false;
      console.log(isValid);
      setPasswordIsValid(false);
    } */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Reset from "./src/components/Reset";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Choose a new password</Text>
      <StatusBar style="auto" />
      <Reset />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

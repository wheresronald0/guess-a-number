import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>
        The Comproooooter, guessed your number, Doo!
      </Text>
      <Text style={styles.text}>The Game is Over!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginVertical: 10,
  },
});

export default GameOver;

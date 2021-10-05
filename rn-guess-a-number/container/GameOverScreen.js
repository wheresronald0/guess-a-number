import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import DefaultStyles from "../constants/Default-Styles";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={{ ...DefaultStyles.titleText, ...styles.text }}>
        The computer, guessed your number!
      </Text>
      <Text style={{ ...DefaultStyles.titleText, ...styles.text }}>
        The Game is Over!
      </Text>
      <Text style={DefaultStyles.bodyText}>
        Number of Rounds: {props.guessedRounds}
      </Text>
      <Text style={DefaultStyles.bodyText}>
        The magic number was: {props.userNumber}
      </Text>
      <Button title="Start New Game" onPress={props.startNewGame} />
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

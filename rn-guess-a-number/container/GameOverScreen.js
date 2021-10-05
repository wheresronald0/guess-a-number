import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import DefaultStyles from "../constants/Default-Styles";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={{ ...DefaultStyles.titleText, ...styles.text }}>
        The computer guessed your number!
      </Text>

      <Image
        source={require("../assets/game_over.jpg")}
        //spource={{
        //uri: "https://www.colourbox.com/preview/8080571-game-over-stamp.jpg",
        //}}
        style={styles.image}
        resizeMode="contain"
      />
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
  image: {
    width: "100%",
    height: 300,
  },
});

export default GameOver;

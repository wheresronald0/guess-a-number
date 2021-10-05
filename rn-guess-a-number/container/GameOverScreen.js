import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import DefaultStyles from "../constants/Default-Styles";
import Colors from "../constants/Colors";
import CustomButton from "../components/CustomButton";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={{ ...DefaultStyles.titleText, ...styles.text }}>
        Your phone guessed your number!
      </Text>

      <Image
        source={require("../assets/game_over.jpg")}
        //spource={{
        //uri: "https://www.colourbox.com/preview/8080571-game-over-stamp.jpg",
        //}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={{ ...DefaultStyles.bodyText, ...styles.text }}>
        The phone needed
        <Text style={styles.highlightText}> {props.guessedRounds} </Text> rounds
        to guess your magic number of
        <Text style={styles.highlightText}> {props.userNumber}</Text>
      </Text>

      <CustomButton onClick={props.startNewGame}>Start New Game</CustomButton>
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
    marginVertical: 20,
    margin: 35,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  highlightText: {
    color: Colors.primaryColor,
    fontSize: 16,
    fontFamily: "open-sansBold",
  },
});

export default GameOver;

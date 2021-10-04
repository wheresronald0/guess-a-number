import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, props.userChoice)
  );
  // similar to state but mutable and won't rerender when changed
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandle = (higherOrLower) => {
    if (
      (higherOrLower === "lower" && currentGuess < props.userChoice) ||
      (higherOrLower === "higher" && currentGuess > props.userChoice)
    ) {
      Alert.alert(
        "You're a damn lyer!",
        "You know that's not the right answer",
        [{ text: "Why don't you try that again", style: "cancel" }]
      );
      return;
    }
    if (higherOrLower === "lower") {
      currentHigh.current = currentGuess; // .current is the property on the currentHigh obj that store the value
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={nextGuessHandle.bind(this, "lower")} />
        <Button title="Higher" onPress={nextGuessHandle.bind(this, "higher")} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 100,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    width: 300,
  },
});

export default GameScreen;

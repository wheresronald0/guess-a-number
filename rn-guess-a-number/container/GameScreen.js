import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import DefaultStyles from "../constants/Default-Styles";
import CustomButton from "../components/CustomButton";

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
  const initialGuess = generateRandomNumber(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  // similar to state but mutable and won't rerender when changed
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  const { userChoice, onGameOver } = props; //deconstructed the props so I can just use the vairable name, and useEffect will only re-run if these two vairable change

  //runs at the end of every re-render cycle
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandle = (higherOrLower) => {
    if (
      (higherOrLower === "lower" && currentGuess < props.userChoice) ||
      (higherOrLower === "higher" && currentGuess > props.userChoice)
    ) {
      Alert.alert(
        "Don't be a liar...",
        "you know that's not the right answer",
        [{ text: "Let's try that again", style: "cancel" }]
      );
      return;
    }
    if (higherOrLower === "lower") {
      currentHigh.current = currentGuess; // .current is the property on the currentHigh obj that store the value
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    //setRounds((curRounds) => curRounds + 1);
    setPastGuesses((currentPastguesses) => [nextNumber, ...currentPastguesses]);
  };

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.titleText}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <CustomButton onClick={nextGuessHandle.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </CustomButton>
        <CustomButton onClick={nextGuessHandle.bind(this, "higher")}>
          <Ionicons name="md-add" size={24} color="white" />
        </CustomButton>
      </Card>
      <ScrollView>
        {pastGuesses.map((guess) => (
          <View key={guess}>
            <Text>{guess}</Text>
          </View>
        ))}
      </ScrollView>
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

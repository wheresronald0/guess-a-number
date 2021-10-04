import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./container/StartGameScreen";
import GameScreen from "./container/GameScreen";
import GameOver from "./container/GameOverScreen";
import { set } from "lodash";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessedRounds, setGuessedRounds] = useState(0);

  const startGameHandle = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessedRounds(0);
  };

  const gameOverHandle = (numberOfRounds) => {
    setGuessedRounds(numberOfRounds);
  };

  const startNewGameHandle = () => {
    setGuessedRounds(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={startGameHandle} />; //getting state from child StartGameScreen
  if (userNumber && guessedRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandle} />
    );
  } else if (guessedRounds > 0) {
    content = (
      <GameOver
        guessedRounds={guessedRounds}
        userNumber={userNumber}
        startNewGame={startNewGameHandle}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Colleen's Great Guess a Number Game!" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

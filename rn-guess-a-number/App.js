import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import Header from "./components/Header";
import StartGameScreen from "./container/StartGameScreen";
import GameScreen from "./container/GameScreen";
import GameOver from "./container/GameOverScreen";
import DefaultStyles from "./constants/Default-Styles";

const getFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sansBold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessedRounds, setGuessedRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  //using if statement for font loading
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.log(error)} //show alt content if it throws an error
      />
    ); // startAsync{} has to be a function that returns a promise
  }

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
      <Header title="The Great 'Guess a Number' Game!" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

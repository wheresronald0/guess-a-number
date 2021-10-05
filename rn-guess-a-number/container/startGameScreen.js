import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import InputField from "../components/Input";
import Colors from "../constants/Colors";
import NumberContainer from "../components/NumberContainer";
import DefaultStyles from "../constants/Default-Styles";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandle = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g), "");
  };

  const resetInputHandle = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandle = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number! Please enter anohter",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandle }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={DefaultStyles.bodyText}>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Start Game"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={{ ...DefaultStyles.titleText, ...styles.title }}>
          Start a New Game
        </Text>
        <Card style={styles.InputsContainer}>
          <Text style={DefaultStyles.bodyText}>Select a Number</Text>
          <InputField
            style={styles.numberInput}
            blurOnSubmit //for Andriod keyboard close
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandle}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <Button
                title="Reset"
                onPress={resetInputHandle}
                color={Colors.accentColor}
              />
            </View>
            <View style={styles.buttons}>
              <Button
                title="Confirm"
                onPress={confirmInputHandle}
                color={Colors.primaryColor}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginTop: 35,
    marginBottom: 60,
  },
  InputsContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  buttons: {
    width: "45%",
    //wrap in View so you can style
  },
  numberInput: {
    width: 30,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 15,
    alignItems: "center",
  },
});

export default StartGameScreen;

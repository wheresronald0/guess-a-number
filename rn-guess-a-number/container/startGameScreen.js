import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../components/Card";
import InputField from "../components/Input";
import Colors from "../constants/Colors";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const numberInputHandle = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g), "");
  };

  const resetInputHandle = () => {
    setEnteredValue("");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.InputsContainer}>
          <Text>Select a Number</Text>
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
                title="I'm Sure"
                onPress={() => {}}
                color={Colors.primaryColor}
              />
            </View>
          </View>
        </Card>
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
    marginVertical: 10,
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
    width: "40%",
    //wrap in View so you can style
  },
  numberInput: {
    width: 30,
    textAlign: "center",
  },
});

export default StartGameScreen;

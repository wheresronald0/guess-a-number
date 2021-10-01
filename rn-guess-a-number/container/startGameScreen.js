import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <Card style={styles.InputsContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button
              title="Reset"
              onPress={() => {}}
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
});

export default StartGameScreen;

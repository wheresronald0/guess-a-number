import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import DefaultStyles from "../constants/Default-Styles";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...DefaultStyles.bodyText, ...styles.text }}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accentColor,
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.accentColor,
    fontSize: 20,
  },
});
export default NumberContainer;

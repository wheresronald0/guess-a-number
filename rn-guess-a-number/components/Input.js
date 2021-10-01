import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputField = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomWidth: 1,
    borderColor: "grey",
    marginVertical: 20,
  },
});
export default InputField;

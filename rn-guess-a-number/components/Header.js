import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import DefaultStyles from "../constants/Default-Styles";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={{ ...DefaultStyles.titleText, ...styles.headerText }}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 35,
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 18,
  },
});

export default Header;

import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.cardStyle, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    shadowOpacity: 0.25,
    // elevation for Andriod only
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
  },
});

export default Card;

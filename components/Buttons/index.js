import React, { Component } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const Buttons = (props) => {
  const {type, content, onPress} = props;

  const backgroundColor =
    type === "primary" ? "rgba(123, 97, 255, 0.5)" : "#464146";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.signUpButton, { backgroundColor }]}
        onPress={() => {
         onPress()
        }}
      >
        <Text style={styles.text}>{content}</Text>
      </Pressable>

    </View>
  );
};
export default Buttons;

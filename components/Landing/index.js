import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";
import Buttons from "../Buttons";

export default function Landing({ navigation }) {

  return (
    <View style={styles.containerForLanding}>
      <View>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <View>
          <Text style={styles.logoName}>MusiTream </Text>
          <Text style={styles.info}>
            Explore fresh auditory content, stream yours, spread the love of
            music.
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <Buttons
          type="primary"
          content={"Create an account"}
          onPress={() => {
            navigation.navigate("Register")
            //it doesnt work at the moment
          }}
        />
        <Buttons
          type="secondary"
          content={"Sign in"}
          onPress={() => {
            navigation.navigate("Login")
            //it doesnt work at the moment
          }}
        />
      </View>
    </View>
  );
};


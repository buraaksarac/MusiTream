import React from "react";
import {Text, View, Image, TextInput } from "react-native";
import styles from "./styles";
import Buttons from "../Buttons";

export default function Register({ navigation }) {

  return (
    <View style={styles.containerForLanding}>
      <View>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <View>
          <Text style={styles.signUp}>Sign Up </Text>
        </View>
      </View>
      <View style={styles.buttons}>
      <TextInput
          style={styles.inputs}
          placeholder=" E-mail"
          placeholderTextColor="rgba(174, 163, 163, 0.6)"
          onChangeText={(val) => setName(val)}
        />
        <TextInput
          style={styles.inputs}
          placeholder=" Username"
          placeholderTextColor="rgba(174, 163, 163, 0.6)"
          onChangeText={(val) => setName(val)}
        />
        <TextInput
          style={styles.inputs}
          placeholder=" Password"
          placeholderTextColor="rgba(174, 163, 163, 0.6)"
          secureTextEntry={true}
          onChangeText={(val) => setPassword(val)}
        />
        <TextInput
          style={styles.inputs}
          placeholder=" User Type"
          placeholderTextColor="rgba(174, 163, 163, 0.6)"
          onChangeText={(val) => setName(val)}
        />
       
        <Buttons type="primary" content={"Register"} 
          onPress={() => {
            navigation.navigate("Home")
            //it doesnt work at the moment
          }}
        />
       
      </View>
    </View>
  );
}

import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import styles from "./styles";
import Buttons from "../Buttons";

export default function Login({ navigation }) {
  

  return (
    <View style={styles.containerForLanding}>
      <View>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <View>
          <Text style={styles.signIn}>Sign In </Text>
        </View>
      </View>
      <View style={styles.buttons}>
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
        <Buttons type="primary" content={"Login"} />
        <Text style={styles.clickable}>
          Don't have an account?{" "}
          <Text
            onPress={() => {
              navigation.navigate("Register");
              //it doesnt work at the moment
            }}
            style={{ color: "#AEA3A3", textDecorationLine: "underline" }}
          >
            Sign up here.
          </Text>
        </Text>
      </View>
    </View>
  );
}

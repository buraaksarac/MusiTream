import React from "react";
import styles from "./styles";
import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Profilesettings() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowBack}>
        <Ionicons name="chevron-back-outline" color="#CBCBCB" size={40} />
      </TouchableOpacity>

      <View style={styles.pageTitle}>
        <Text style={{ color: "#CBCBCB", fontSize: 25, fontWeight: "600" }}>
          Profile Settings
        </Text>
      </View>
      <View style={styles.profileBorder}>
        <View style={styles.profilePic}>
          <Image
            source={require("../../assets/person6.jpg")}
            style={styles.image}
          ></Image>
        </View>
        <TouchableOpacity style={styles.add}>
          <Ionicons name="ios-add-circle" size={35} color="#35303D"></Ionicons>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.settingsBorder}>
          <Text style={styles.text}>user name:</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Opia"
            placeholderTextColor="#656565"
          ></TextInput>
          <Text style={styles.text}>user type:</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Producer"
            placeholderTextColor="#656565"
          ></TextInput>
          <Text style={styles.text}>about:</Text>
          <TextInput
            style={styles.inputBorder}
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a commodo odio. Vestibulum condimentum at arcu non cursus. 
                "
            placeholderTextColor="#656565"
            numberOfLines={5}
          ></TextInput>
        
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>SAVE</Text>
        </TouchableOpacity></View>
      </View>
    </View>
  );
}

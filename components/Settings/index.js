import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";

export default function Settings({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.containerForLanding}>
      <TouchableOpacity style={styles.arrowBack}>
        <Ionicons name="chevron-back-outline" color="#CBCBCB" size={40} />
      </TouchableOpacity>

      <View style={styles.pageTitle}>
        <Text style={{ color: "#CBCBCB", fontSize: 25, fontWeight: "600" }}>
          Settings
        </Text>
      </View>
      <View style={styles.margining}>
        <TouchableOpacity
          style={styles.clickable}
          onPress={() => {
            console.log("profileSettings pressed");
          }}
        >
          <Ionicons
            style={{ position: "absolute", marginLeft: 5 }}
            name="people-circle"
            size={30}
            color="#CBCBCB"
          ></Ionicons>
          <Text style={styles.settings}>Profile Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <TouchableOpacity style={styles.clickable} onPress={toggleModal}>
            <Ionicons
              style={{ position: "absolute", marginLeft: 5 }}
              name="information-circle"
              size={30}
              color="#CBCBCB"
            ></Ionicons>
            <Text style={styles.settings}>About Us</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <Modal isVisible={isModalVisible}>
          <TouchableOpacity onPress={toggleModal}>
            <Ionicons
              style={styles.closeButton}
              name="close-circle-outline"
              size={30}
            ></Ionicons>
          </TouchableOpacity>

          <View>
            <Text style={styles.about}>
              Thanks for downloading our app! This app is developed by 3 music
              lovers to spread the love of the music and bring music lovers
              together. Feel free to contact us via our e-mail for any
              suggestions or problems: musitream@gmail.com {"\u270c"}
            </Text>
          </View>
        </Modal>
        <TouchableOpacity style={styles.clickable}>
          <Ionicons
            style={{ position: "absolute", marginLeft: 5 }}
            name="log-out"
            size={30}
            color="#CBCBCB"
          ></Ionicons>
          <Text style={styles.settings}>Log Out</Text>
        </TouchableOpacity>
        <View style={styles.copyright}>
          <Text style={{ color: "#555454" }}>MusiTream {"\u00A9"} 2021</Text>
        </View>
      </View>
    </View>
  );
}

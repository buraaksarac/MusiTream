import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Profile() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <ScrollView style={styles.container}>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.arrowBack}>
          <Ionicons name="chevron-back-outline" color="#CBCBCB" size={40} />
        </TouchableOpacity>

        <View style={styles.pageTitle}>
          <Text style={{ color: "#CBCBCB", fontSize: 25, fontWeight: "600" }}>
            Explore
          </Text>
        </View>

        <View style={styles.exploreBorder}>
          <TouchableOpacity style={styles.profilePic}>
            <Image
              source={require("../../assets/person6.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <View style={styles.info}>
            <Text style={styles.username}>Opia</Text>
            <Text style={styles.usertype}>Producer</Text>
          </View>
        
        <ScrollView style={styles.mediaBorder}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.mediaContainer}>
              <Image
                source={require("../../assets/random2.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaContainer}>
              <Image
                source={require("../../assets/random3.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaContainer}>
              <Image
                source={require("../../assets/random3.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
        </View>
      </ScrollView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  arrowBack: {
    justifyContent: "flex-start",
    marginTop: 60,
    marginHorizontal: 16,
  },
  more: {
    position: "absolute",
    marginTop: 60,
    marginStart: 330,
    marginHorizontal: 16,
  },
  pageTitle: {
    position: "absolute",
    justifyContent: "flex-start",
    marginHorizontal: 16,
    marginTop: 63,
    marginStart: 60,
  },
  profilePic: {
    marginTop: 20,
    marginLeft: 20,
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: "hidden",
  },
  mediaBorder: {
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "rgba(195, 183, 255, 0.42)",
    width: 315,
    marginTop: 20,
    
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  exploreBorder: {
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "#35303D",
    width: 315,
    height: 300,
    marginTop: 10,
  },

  info: {
    color: "#fff",
    marginTop: 30,
    position: "absolute",
    marginLeft: 80,
  },
  username: {
    color: "#CBCBCB",
    fontSize: 13,
    fontWeight: "700",
  },
  usertype: {
    color: "#AAAAAA",
    fontSize: 12,
    fontWeight: "400",
  },
  contentBorder: {
    backgroundColor: "rgba(195, 183, 255, 0.42)",
  },
  mediaContainer: {
    borderWidth: 0.5,
    borderColor: "#383838",
    marginLeft: 35,
    marginTop: 30,
    width: 100,
    height: 140,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
});
import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { render } from "react-dom";

export default function Home() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowBack}>
        <Ionicons name="ios-add-circle" color="#CBCBCB" size={40} />
      </TouchableOpacity>
     
      <View style={styles.pageTitle}>
        <Text style={{ color: "#CBCBCB", fontSize: 25, fontWeight: "600" }}>
          Home
        </Text>
      </View>
      <View style={styles.profileBorder}>
        <View style={styles.profilePic}>
          <Image
            source={require("../../assets/post1.jpg")}
            style={styles.image}
          ></Image>
        </View>
       
        <View style={styles.info}>
          <Text style={styles.username}>Opia</Text>
          <Text style={styles.usertype}>Producer</Text>
        </View>
        <View style={styles.aboutPost}>
        <Text
            style={{
              color: "#CBCBCB",
              fontSize: 13,
              padding: 10,
              marginLeft: 30,
              width: 330,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            commodo odio. Vestibulum condimentum at arcu non cursus.
          </Text>
        </View>

        <View style={styles.postPic}>
        

        
          <Image
            source={require("../../assets/pp1.jpg")}
            style={styles.image1}
          ></Image>
        </View>
        

        <View style={styles.buttonsContainer}>

        <TouchableOpacity style={styles.comment}>
          <Ionicons name="create-outline" size={30} color="#CBCBCB"></Ionicons>
        </TouchableOpacity>

        

        <TouchableOpacity style={styles.like}>
          <Ionicons name="heart-outline" size={30} color="#CBCBCB"></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity style={styles.share}>
          <Ionicons name="share-social-outline" size={30} color="#CBCBCB"></Ionicons>
        </TouchableOpacity>

        </View>
        

        
      </View>
    
      
        





        

        </View>
  );
}

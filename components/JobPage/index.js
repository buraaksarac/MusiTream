import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function Job() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowBack}>
        <Ionicons name="chevron-back-outline" color="#CBCBCB" size={40} />
      </TouchableOpacity>

      <View style={styles.pageTitle}>
        <Text style={{ color: "#CBCBCB", fontSize: 25, fontWeight: "600" }}>
          Job Ads
        </Text>
      </View>
      <View style={styles.profileBorder}>
        <View style={styles.profilePic}>
          <Image
            source={require("../../assets/random1.jpg")}
            style={styles.image}
          ></Image>
        </View>

        <View style={styles.info}>
          <Text style={styles.employername}>Opia Balıkçı</Text>
          <Text style={styles.employertype}>
            Owner of Bitirmece Discord Channel
          </Text>
        </View>
        <View></View>
        <View style={styles.aboutJobad}>
          <Text style={styles.jobtype}>Remote Full-time</Text>
          <Text
            style={{
              color: "#CBCBCB",
              fontSize: 11,
              textAlign: "left",
              width: 250,
              position: "absolute",
              marginTop: 40,
              marginRight: 90,
            }}
          >
            DUTIES: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec a commodo odio. Vestibulum condimentum at arcu non cursus.
          </Text>

          <TouchableOpacity style={styles.apply}>
            <Ionicons name="play" size={70} color="#7B61FF"></Ionicons>
            <Text
              style={{
                color: "#CBCBCB",
                fontSize: 11,
                position: "absolute",
                marginTop: 28,
                marginLeft: 15,
              }}
            >
              Apply
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer}></View>
      </View>
    </View>
  );
}

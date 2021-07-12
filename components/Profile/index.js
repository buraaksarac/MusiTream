import React, { useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";

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
        <TouchableOpacity style={styles.more}>
          <MaterialIcons name="more-vert" color="#CBCBCB" size={40} />
        </TouchableOpacity>
        <View style={styles.pageTitle}>
          <Text style={{ color: "#CBCBCB", fontSize: 25, fontWeight: "600" }}>
            Profile
          </Text>
        </View>
        <View style={styles.profileBorder}>
          <View style={styles.profilePic}>
            <Image
              source={require("../../assets/person6.jpg")}
              style={styles.image}
            ></Image>
          </View>
         
          <View style={styles.info}>
            <Text style={styles.username}>Opia</Text>
            <Text style={styles.usertype}>Producer</Text>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text style={styles.text}>58</Text>
              <Text style={styles.subText}>posts</Text>
            </View>
            <View
              style={[
                styles.statsBox,
                {
                  borderColor: "#DFD8C8",
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                },
              ]}
            >
              <Text style={styles.text}>452</Text>
              <Text style={styles.subText}>FOLLOWERS</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={styles.text}>122</Text>
              <Text style={styles.subText}>FOLLOWING</Text>
            </View>
          </View>
        </View>
        <View style={styles.aboutBorder}>
          <View
            style={{
              padding: 2,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#AAAAAA",
                fontSize: 12,
                fontWeight: "700",
                marginBottom: 5,
                marginTop: 3,
              }}
            >
              About
            </Text>
            <Text
              style={{
                color: "#CBCBCB",
                fontSize: 10,
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              commodo odio. Vestibulum condimentum at arcu non cursus.
            </Text>
          </View>
        </View>
        <View style={styles.mediaBorder}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.mediaContainer}
              onPress={toggleModal}
            >
              <Image
                source={require("../../assets/random1.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>

            <Modal isVisible={isModalVisible} style={{ marginTop: 50 }}>
              <TouchableOpacity onPress={toggleModal}>
                <Ionicons
                  style={styles.closeButton}
                  name="close-circle-outline"
                  size={30}
                ></Ionicons>
              </TouchableOpacity>

              <View style={styles.clickable}>
                <Image
                  source={require("../../assets/random1.jpg")}
                  style={styles.image}
                ></Image>
                <Text style={styles.caption}>
                  this is me singing my lorem song, enjoy
                </Text>
              </View>
            </Modal>

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
                source={require("../../assets/random4.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.contentCounter}>
            <Text style={styles.text}>4</Text>
            <Text style={styles.subText}>media</Text>
          </View>
        </View>
        <ScrollView style={styles.mediaBorder}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.audioBorder}>
              <TouchableOpacity style={styles.audioContent}>
                <Ionicons name="pulse" color="#CBCBCB" size={40} />
              </TouchableOpacity>
              <Text style={styles.audioInfo}>this is my last song</Text>
            </View>

            <View style={styles.audioBorder}>
              <TouchableOpacity style={styles.audioContent}>
                <Ionicons name="pulse" color="#CBCBCB" size={40} />
              </TouchableOpacity>
              <Text style={styles.audioInfo}>this is my third song</Text>
            </View>
            <View style={styles.audioBorder}>
              <TouchableOpacity style={styles.audioContent}>
                <Ionicons name="pulse" color="#CBCBCB" size={40} />
              </TouchableOpacity>
              <Text style={styles.audioInfo}>this is my second song</Text>
            </View>
            <View style={styles.audioBorder}>
              <TouchableOpacity style={styles.audioContent}>
                <Ionicons name="pulse" color="#CBCBCB" size={40} />
              </TouchableOpacity>
              <Text style={styles.audioInfo}>this is my first song</Text>
            </View>
          </ScrollView>
          <View style={styles.contentCounter}>
            <Text style={styles.text}>4</Text>
            <Text style={styles.subText}>audio</Text>
          </View>
        </ScrollView>

        <View style={styles.navbar}>
          <TouchableOpacity style={{ marginRight: 40 }}>
            <Ionicons name="home-outline" color="#CBCBCB" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 40 }}>
            <Ionicons name="search-outline" color="#CBCBCB" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 40 }}>
            <Ionicons name="briefcase-outline" color="#CBCBCB" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 40 }}>
            <Ionicons name="radio-outline" color="#CBCBCB" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="person-outline" color="#CBCBCB" size={30} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

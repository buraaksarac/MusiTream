import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function StreamPodcast() {
  return (
    <ScrollView style={styles.container}>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.arrowBack}>
          <Ionicons name="chevron-back-outline" color="#CBCBCB" size={40} />
        </TouchableOpacity>

        <View style={styles.pageTitle}>
          <Text style={{ color: "#CBCBCB", fontSize: 25, fontWeight: "600" }}>
            Stream&Podcast
          </Text>
        </View>

        <View style={styles.streamBorder}>
          <View style={styles.containerStream}>
            <View style={styles.profileBorder}>
              <View style={styles.profilePic}>
                <Image
                  source={require("../../assets/person6.jpg")}
                  style={styles.image}
                ></Image>
              </View>
              <TouchableOpacity style={styles.play}>
                <Ionicons name="play" size={35} color="#7B61FF"></Ionicons>
              </TouchableOpacity>
              <Text style={styles.userName}> Go Live</Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Write something about your stream!"
              placeholderTextColor="#656565"
            ></TextInput>
          </View>
          <Text
            style={{
              color: "#CBCBCB",
              fontSize: 18,
              marginLeft: 20,
              marginTop: 15,
              fontWeight: "700",
              marginBottom: 10,
            }}
          >
            Current Streamers
          </Text>

          <ScrollView vertical={true} showsVerticalScrollIndicator={true}>
            <View style={styles.containerStream}>
              <View style={styles.profileBorder}>
                <View style={styles.profilePic}>
                  <Image
                    source={require("../../assets/person2.jpg")}
                    style={styles.image}
                  ></Image>
                </View>
                <TouchableOpacity style={styles.play}>
                  <Ionicons name="play" size={35} color="#7B61FF"></Ionicons>
                </TouchableOpacity>
                <Text style={styles.userName}> Arthur Stinson</Text>
              </View>

              <Text style={styles.streamer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
            <View style={styles.containerStream}>
              <View style={styles.profileBorder}>
                <View style={styles.profilePic}>
                  <Image
                    source={require("../../assets/person3.jpg")}
                    style={styles.image}
                  ></Image>
                </View>
                <TouchableOpacity style={styles.play}>
                  <Ionicons name="play" size={35} color="#7B61FF"></Ionicons>
                </TouchableOpacity>
                <Text style={styles.userName}>Betty Beep</Text>
              </View>

              <Text style={styles.streamer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.podcastBorder}>
          <Text
            style={{
              color: "#CBCBCB",
              fontSize: 18,
              marginLeft: 25,
              marginTop: 15,
              fontWeight: "700",
            }}
          >
            Podcasts
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* only the first podcast has the pop up the others are just visual*/}
            <View style={styles.userBorder}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/random2.jpg")}
                  style={styles.podcaster}
                  resizeMode="cover"
                ></Image>
                <Text style={styles.audioInfo}>lorem ipsum doler sit amet</Text>
                <Text style={styles.userName}>Charlotte Mai</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.userBorder}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/person4.jpg")}
                  style={styles.podcaster}
                  resizeMode="cover"
                ></Image>
                <Text style={styles.audioInfo}>lorem amet</Text>
                <Text style={styles.userName}>RODNAE</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.userBorder}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/person5.jpg")}
                  style={styles.podcaster}
                  resizeMode="cover"
                ></Image>
                <Text style={styles.audioInfo}>
                  lorem lamet senifytiko ipsum doler sit
                </Text>
                <Text style={styles.userName}>cottonbro</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.userBorder}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/random3.jpg")}
                  style={styles.podcaster}
                  resizeMode="cover"
                ></Image>
                <Text style={styles.audioInfo}>lorem </Text>
                <Text style={styles.userName}>KarolinaH</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
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

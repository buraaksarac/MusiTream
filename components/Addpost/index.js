import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";

export default function Addpost({ navigation }) {
  // for pop up windows
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [isModalTwoVisible, setModalTwoVisible] = useState(false);
  const toggleModalTwo = () => {
    setModalTwoVisible(!isModalTwoVisible);
  };
  return (
    <View style={styles.containerForLanding}>
      <TouchableOpacity style={styles.arrowBack}>
        <Ionicons name="chevron-back-outline" color="#CBCBCB" size={40} />
      </TouchableOpacity>

      <View style={styles.pageTitle}>
        <Text style={{ color: "#CBCBCB", fontSize: 25, fontWeight: "600" }}>
          Add Post
        </Text>
      </View>
      <View style={styles.margining}>
        <TouchableOpacity style={styles.clickable} onPress={toggleModal}>
          <Ionicons
            style={{ position: "absolute", marginLeft: 8 }}
            name="images"
            size={25}
            color="#CBCBCB"
          ></Ionicons>
          <Text style={styles.settings}>From Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <TouchableOpacity style={styles.clickable} onPress={toggleModal}>
            <Ionicons
              style={{ position: "absolute", marginLeft: 8 }}
              name="camera"
              size={25}
              color="#CBCBCB"
            ></Ionicons>
            <Text style={styles.settings}>From Camera</Text>
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

          <View style={styles.addPost}>
            <Text style={styles.addPostText}>About:</Text>
            <TextInput
              style={styles.inputs}
              placeholder="Write something about your post!"
              placeholderTextColor="#656565"
            />
            <Text style={styles.addPostText}>Media:</Text>
            <TouchableOpacity>
              <Image
                source={require("../../assets/random1.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.postButton}>
              <Text style={styles.postText}>POST</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity>
             <TouchableOpacity style={styles.clickable} onPress={toggleModalTwo}>
          <Ionicons
            style={{ position: "absolute", marginLeft: 8 }}
            name="briefcase"
            size={25}
            color="#CBCBCB"
          ></Ionicons>
          <Text style={styles.settings}>Job Ad</Text>
        </TouchableOpacity>
        </TouchableOpacity>
        <Modal isVisible={isModalTwoVisible}>
          <TouchableOpacity onPress={toggleModalTwo}>
            <Ionicons
              style={styles.closeButton}
              name="close-circle-outline"
              size={30}
            ></Ionicons>
          </TouchableOpacity>

          <View style={styles.addPost}>
            <Text style={styles.addPostText}>Company:</Text>
            <TextInput
              style={styles.jobInputs}
              placeholder="Enter your company name"
              placeholderTextColor="#656565"
            />
            <Text style={styles.addPostText}>Job Title:</Text>
            <TextInput
              style={styles.jobInputs}
              placeholder="Enter the job title"
              placeholderTextColor="#656565"
            />
<Text style={styles.addPostText}>Job Type:</Text>
            <TextInput
              style={styles.jobInputs}
              placeholder="Full-Time/Intern/Remote..."
              placeholderTextColor="#656565"
            />
            <Text style={styles.addPostText}>Explanation:</Text>
            <TextInput
              style={styles.jobInputs}
              placeholder="What do you want from an applicant?"
              placeholderTextColor="#656565"
            />
            <TouchableOpacity style={styles.postButton}>
              <Text style={styles.postText}>POST</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
}

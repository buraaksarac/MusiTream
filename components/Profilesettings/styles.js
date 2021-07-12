import { StyleSheet } from "react-native";

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

  pageTitle: {
    position: "absolute",
    justifyContent: "flex-start",
    marginHorizontal: 16,
    marginTop: 63,
    marginStart: 60,
  },
  profilePic: {
    marginTop: 20,
    marginLeft: 108,
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden",
  },
  aligning: {
    alignSelf: "center",
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  profileBorder: {
    alignSelf: "center",
    width: 315,
    height: 180,
    marginTop: 50,
  },
  add: {
    position: "absolute",
    marginLeft: 178,
    marginTop: 95,
  },

  text: {
    fontSize: 14,
    color: "#CBCBCB",
    fontWeight: "400",
    textTransform: "uppercase",
    marginTop: 25,
  },
  inputs: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
  },
  settingsBorder: {
    alignSelf: "center",
    width: 270,
    height: 400,
  },
  inputBorder: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,

    width: 280,
    height: 200,
    textAlignVertical: "top",
  },
  saveButton:{
      height: 42,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 12,
      marginBottom:50,
      backgroundColor:"rgba(195, 183, 255, 0.42)",
    
  },
  saveText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#AEA3A3",
  },
});
export default styles;

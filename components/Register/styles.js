import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttons: {
    position: "absolute",
    width: "100%",
    top: 350,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  containerForLanding: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  logo: {
    alignSelf: "center",
    marginTop: "25%",
    width: 146,
    height: 122,
  },
  signUp: {
    textAlign: "center",
    width: "100%",
    marginTop: "10%",
    fontWeight: "800",
    fontSize: 30,
    color: "#AEA3A3",
  },
  inputs: {
    borderWidth: 1,
    borderColor: "#7B61FF",
    padding: 8,
    margin: 15,
    borderRadius: 5,
    fontSize: 15,
    fontWeight: "500",
  },
  clickable:{
      marginTop:30,
      color:" rgba(174, 163, 163, 0.6)",
      alignSelf:"center",
      fontSize:16
  }
});
export default styles;

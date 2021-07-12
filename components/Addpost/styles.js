import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerForLanding: {
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
  settings: {
    marginLeft: 40,
    marginRight: 15,
    width: "100%",
    fontWeight: "800",
    fontSize: 14,
    color: "#CBCBCB",
  },
  clickable: {
    padding: 2,
    width: undefined,
    height: 40,
    backgroundColor: "rgba(195, 183, 255, 0.42)",
    alignSelf: "center",
    fontSize: 16,
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 15,
  },
  margining: {
    marginTop: 200,
  },
  addPostText: {
    fontWeight: "700",
    fontSize: 14,
    color: "#CBCBCB",
    padding:10
  },
  addPost: {
    backgroundColor: "#35303D",
    borderRadius: 30,
    alignSelf:"center",
    width: 350,
    padding: 20,
  
  },
  closeButton: {
    color: "#CBCBCB",
    marginLeft: 315,
  },
  inputs: {
    fontSize: 12,
    fontWeight: "500",
    position:"absolute",
    marginLeft:98,
    marginTop:26,

  },
  image:{
    
      width:200,
      height:150,
      marginLeft:80,
  },
  postButton:{
    height: 25,
    justifyContent: "center",
    alignSelf: "center",
    alignItems:"center",
    borderRadius: 12,
    marginTop:30,
    backgroundColor:"#7B61FF",
    width:130
},
postText: {
  fontSize: 13,
  fontWeight: "400",
  color: "#CBCBCB",
},
jobInputs:{
    padding:8,
    fontSize: 12,
    fontWeight: "500",

}
});
export default styles;

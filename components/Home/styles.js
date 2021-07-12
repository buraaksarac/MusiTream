import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  arrowBack: {
    position: "absolute",
    marginLeft: 330,
    justifyContent: "flex-end",
    marginTop: 30,
    marginHorizontal: 16,
  },
  more: {
    position: "absolute",
    marginTop: 50,
    marginStart: 330,
    marginHorizontal: 16,
  },
  pageTitle:{
    position:"absolute",
    justifyContent:"flex-start",
    marginHorizontal:16,
    marginTop:35,
    marginStart:30,
    
  },
  profilePic: {
    marginTop: 15,
    marginLeft: 30,
    width: 60,
    height: 60,
    borderRadius: 100,
    overflow: "hidden",
  },
  aligning: {
    alignSelf: "center",
  },
  
  image: {
    flex:1,
    width: 100,
    height: undefined,
  },
  postPic:{
      alignSelf:"center",
      marginTop: 24,
    width: 270,
    height: 170,
    borderRadius: 100,
  },
  image1: {
      alignSelf: "center",
    flex:1,
    width: 300,
    height: undefined,
  },
  comment:{
      marginRight:95,
  },
  like:{
    marginRight:95,

},
  share:{
    marginRight: 95,
  },

  aboutPost:{

  },
  


  profileBorder: {
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "rgba(53, 48, 61, 1)",
    width: 380,
    height: 400,
    marginTop: 80,
  },
  

  
  info: {
    position: "absolute",
    color: "#fff",
   
    marginLeft: 90,
    marginBottom: 70,
    marginTop: 10,
    
  },
  username: {

    color: "#CBCBCB",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    marginLeft:20,
  },
  usertype: {
    marginLeft:20,
    color: "#AAAAAA",
    fontSize: 14,
    fontWeight: "400",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginLeft:95,
    marginTop: 18,
    
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },

  text: {
    
    fontSize: 18,
    color: "#CBCBCB",
    fontWeight: "400",
  },
  subText: {
   
    color: "#CBCBCB",
    fontSize: 10,
    textTransform:"uppercase",
    fontWeight: "500",
  },
 
  mediaBorder:{
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "#35303D",
    width: 380,
    height: 200,
    marginTop: 10,
  },
  mediaContainer:{
    width:100,
    height:200,
    borderRadius:12,
    overflow:"hidden",
    marginHorizontal:10,

  }
});
export default styles;
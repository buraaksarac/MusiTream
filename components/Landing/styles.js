import {StyleSheet} from "react-native"


const styles = StyleSheet.create({
    buttons:{
      position:"absolute",
      width:"100%",
      bottom:50
    },
    container: {
      flex:1,
      backgroundColor:"#000"
    },
    containerForLanding: {
      width:"100%",
      height:"100%",
      backgroundColor:"#000"
    },
    logo: {
      alignSelf:"center",
      marginTop:"25%",
      width: 178,
      height: 148,
      
    },
    logoName: {
      
      textAlign:"center",
      width:"100%",
      marginTop:"10%",
      fontWeight:"800",
      fontSize:38,
      color: "#AEA3A3"
    },
    info:{
     
      fontWeight:"300",
      fontSize:25,
      textAlign:"center",
      marginTop:"15%",
      color: "#847A7A",
      
    }
  });
  export default styles;
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
    marginLeft: 20,
    width: 60,
    height: 60,
    borderRadius: 100,
    overflow: "hidden",
  },
  play: {
    position: "absolute",
    marginLeft: 60,
    marginTop: 40,
  },

  containerStream: {
    alignSelf: "center",
    width: 380,
    height: 90,
    marginTop: 15,
  },
  userName: {
    color: "#CBCBCB",
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  streamBorder: {
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "rgba(53, 48, 61, 1)",
    width: 380,
    height: 350,
    marginTop: 20,
  },
  input: {
    fontSize: 12,
    fontWeight: "500",
    position: "absolute",
    marginLeft: 110,
    marginTop: 20,
  },
  profileBorder: {
    width: 100,
    height: 100,
  },
  streamer: {
    color: "#CBCBCB",
    fontSize: 12,
    position: "absolute",
    marginLeft: 110,
    marginTop: 20,
  },
  podcastBorder: {
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "rgba(53, 48, 61, 1)",
    width: 380,
    height: 223,
    marginTop: 30,
    marginBottom: 10,
  },

  userBorder: {
    width: 100,
    height: 170,
    alignItems: "center",
    marginTop: 10,
    marginLeft: 25,
    borderRadius: 12,
  },

  audioInfo: {
    marginTop: 5,
    textAlign: "center",
    color: "#CBCBCB",
    fontSize: 10,
    fontWeight: "500",
  },
  podcaster: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  navbar: {
    alignSelf: "center",
    flexDirection: "row",
    padding: 5,
  },
});
export default styles;

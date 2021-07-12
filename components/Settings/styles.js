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
  copyright: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 220,
  },
  about: {
    backgroundColor: "rgba(123, 97, 255, 0.5)",
    borderRadius: 12,
    marginLeft: 40,
    marginRight: 15,
    width: 300,
    fontWeight: "700",
    fontSize: 14,
    padding: 20,
    color: "#CBCBCB",
    textAlign: "center",
  },
  closeButton: {
    color: "#CBCBCB",
    marginLeft: 315,
  },
});
export default styles;

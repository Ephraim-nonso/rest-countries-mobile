import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingBottom: 100,
    height: "100%",
    // flex: 1,
  },
  boxContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 10,
    paddingVertical: 10,
    paddingLeft: 20,
    borderRadius: 7,
  },
  details: {
    marginLeft: 30,
    justifyContent: "center",
  },
  titleName: {
    fontSize: 18,
    fontWeight: "700",
  },
  others: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 3,
  },
  info: {
    fontWeight: "200",
  },
});

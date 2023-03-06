import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "white",
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  square: {
    width: 48,
    height: 35,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  even: {
    backgroundColor: "#54D4F2",
  },
  odd: {
    backgroundColor: "pink",
  },
  number: {
    fontWeight: 16,
    fontWeight: "700",
    color: "#fff",
  },
  content: {
    width: "80%",
    fontSize: 16,
  },
});

export default styles;

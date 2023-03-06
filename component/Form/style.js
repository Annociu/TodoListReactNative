import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addTask: {
    bottom: 30,
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 44,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#21a3d0",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconWrapper: {
    width: 44,
    height: 44,
    backgroundColor: "#21a3d0",
    borderRadius: 44,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#21a3d0",
  },
  icon: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default styles;

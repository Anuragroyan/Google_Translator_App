import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8dbcbb",
  },
  wrapper: {
    width: "90%",
    padding: 30,
    backgroundColor: "white",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
    marginBottom: 80,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  picker: {
    height: 40,
    marginBottom: 20,
  },
  exchangeButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0984e3",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  exchangeButtonText: {
    color: "white",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#0984e3",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  mainhead: {
    fontWeight: "bold",
    padding: 30,
    fontSize: 25,
    color: "black",
    fontFamily: "Cochin",
  },
});
export { styles };

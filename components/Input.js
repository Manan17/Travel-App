import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
const { width } = Dimensions.get("screen");
const Input = ({ placeholder }) => {
  return (
    <>
      <View style={styles.input}>
        <FontAwesome5 name="search" size={20} />
        <TextInput placeholder={placeholder} style={styles.input__field} />
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    width: width / 1.1,
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.3,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  input__field: {
    marginLeft: 20,
    padding: 5,
    flex: 1,
    color: "#000",
  },
});

import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const ImageButton = ({ title, description, onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.imageButton}>
        <Text style={styles.imageButton__title}>{title}</Text>
        <Text style={styles.imageButton__desc}>{description}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  imageButton: {
    position: "absolute",
    bottom: 10,
  },
  imageButton__title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  imageButton__desc: {
    fontSize: 16,
    marginVertical: 3,
    color: "white",
    textAlign: "center",
  },
});

import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width } = Dimensions.get("screen");
const Card = ({
  image,
  title,
  desc,
  location,
  navigation,
  bigDesc,
  price,
  duration,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate("details", {
          data: {
            image,
            title,
            desc,
            location,
            bigDesc,
            price,
            duration,
          },
        })
      }
    >
      <View style={styles.card}>
        <View style={styles.card__imageContainer}>
          <Image style={styles.card__image} source={{ uri: image }} />
        </View>
        <View style={{ flex: 0.7, marginLeft: 10 }}>
          <Text style={styles.card__title}>{title}</Text>
          <Text style={styles.card__location}>📍{location}</Text>
          <Text>{desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginVertical: 15,
    alignSelf: "center",
    width: width / 1.1,
    flexDirection: "row",
    padding: 12,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.3,
    elevation: 6,
  },
  card__imageContainer: {
    flex: 0.3,
  },
  card__image: {
    flex: 1,
    borderRadius: 10,
  },
  card__title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card__location: {
    flex: 1,
    color: "gray",
  },
});

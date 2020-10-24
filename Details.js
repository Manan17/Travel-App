import React, { useState } from "react";
import {
  Image,
  View,
  Dimensions,
  StyleSheet,
  Text,
  Button,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
const Details = (props) => {
  const data = props.route.params.data;
  const [liked, setLiked] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.details__imageContainer}>
          <Image
            source={{
              uri: data.image,
            }}
            style={styles.details__image}
          />
          <View style={styles.details__titleContainer}>
            <Text style={styles.details__title}>{data.title}</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.details__like}>
            <TouchableOpacity onPress={() => setLiked(!liked)}>
              <AntDesign
                name={liked ? "heart" : "hearto"}
                size={30}
                color={liked ? "red" : "black"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.details__desc}>
            <Text style={styles.details__descTitle}>Description</Text>
            <View style={styles.details__descTitleBottom}></View>
            <View style={styles.details__descInfo}>
              <Text style={styles.details__descText}>{data.desc}</Text>
              <Text style={styles.details__descText}>{data.bigDesc}</Text>
            </View>
            <View>
              <Text style={styles.details__descTitle}>Pricing</Text>
              <View style={styles.details__descTitleBottom}></View>
              <Text style={styles.details__price}>
                {data.price} / {data.duration}
              </Text>
              <Text style={styles.details__descText}>With food and tents</Text>
            </View>
            <View style={{ marginTop: 20, marginBottom: 20 }}>
              <Button title="Book Now!" color="#355070" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  details__imageContainer: {
    height: height / 2,
    width: width,
  },
  details__image: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  details__titleContainer: {
    position: "absolute",
    bottom: 40,
    left: 20,
  },
  details__title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  details__like: {
    marginLeft: width / 1.12,
    marginTop: 20,
  },
  details__desc: {
    marginHorizontal: width / 9,
  },
  details__descTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#e26d5c",
  },
  details__descTitleBottom: {
    width: "55%",
    height: 5,
    backgroundColor: "#723d46",
  },
  details__descInfo: {
    marginTop: 20,
  },
  details__descText: {
    fontSize: 16,
    color: "#472d30",
    fontWeight: "600",
  },
  details__price: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});

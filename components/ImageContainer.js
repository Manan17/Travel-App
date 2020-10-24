import React from "react";
import { View, Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import ImageButton from "./ImageButton";
const { width, height } = Dimensions.get("screen");
const ImageContainer = ({ navigation }) => {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.imageContainer__inner}>
        <Image
          style={styles.imageContainer__image}
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/b/b4/Adventure-clouds-environment-672358.jpg",
          }}
        />
        <ImageButton
          title="Explore"
          description="Trekking, mountains & much more"
          onPress={() => {
            navigation.navigate("explore");
          }}
        />
      </View>
      <View style={styles.imageContainer__inner}>
        <Image
          style={styles.imageContainer__image}
          source={{
            uri:
              "https://spiderimg.amarujala.com/assets/images/2019/12/09/750x506/travel_1575888048.jpeg",
          }}
        />
        <ImageButton
          title="Luxury"
          description="Stunning Places & Beautiful trips"
        />
      </View>
      <View style={styles.imageContainer__inner}>
        <Image
          style={styles.imageContainer__image}
          source={{
            uri:
              "https://i1.wp.com/carmensluxurytravel.com/wp-content/uploads/2020/04/nathan-dumlao-EdULZpOKsUE-unsplash.jpg?resize=770%2C512&ssl=1",
          }}
        />
        <ImageButton title="Honeymoon" description="Romanctic experiences" />
      </View>
      <View style={styles.imageContainer__inner}>
        <Image
          style={styles.imageContainer__image}
          source={{
            uri:
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aerial-view-portland-head-lighthouse-maine-usa-royalty-free-image-1577810908.jpg?crop=0.565xw:1.00xh;0.218xw,0&resize=480:*",
          }}
        />
        <ImageButton
          title="Family"
          description="Have fun with your family & friends"
        />
      </View>
    </View>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  imageContainer__inner: {
    marginVertical: 10,
    height: height / 3.5,
    width: width / 2.5,
  },
  imageContainer__image: {
    flex: 1,
    borderRadius: 20,
  },
});

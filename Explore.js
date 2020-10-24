import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../components/Card";
const { height } = Dimensions.get("screen");
const Explore = (props) => {
  const data = [
    {
      id: 1,
      image:
        "https://img.traveltriangle.com/blog/wp-content/uploads/2017/01/shutterstock_391535467.jpg",
      title: "Cypress Trek",
      location: "Cypress, Maharashtra",
      desc: "Enjoy trekking in Maharashtra with full food and tent",
      price: "$100",
      duration: "3 days",
      bigDesc:
        "At a distance of 11 km from Lonavala, 66 km from Pune & 114 km from Mumbai, the Lohagad Fort (Iron Fort) is a historical fort situated along the Sahyadri hills in Lonavala region of Maharashtra.",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Shindola Trail",
      location: "Park Flyover, Maharashtra",
      desc: "Enjoy trekking in Maharashtra with full food and tent",
      bigDesc:
        "At a distance of 20 km from Mahabaleshwar, 140 km from Pune & 221 km from Mumbai, Pratapgad, also known as Pratapgarh, is a large hill fort located in Satara district of Maharashtra.",
      price: "$150",
      duration: "3 days",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/554609/pexels-photo-554609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Lohagad Fort",
      location: "Lonavala, Maharashtra",
      desc: "Lohagad Fort is one of the most visited forts in Maharashtra",
      bigDesc:
        "It is one of the best tourist places to visit in Lonavala and also one of the popular historical places in Maharashtra that can be visited as part of Lonavala tour packages. ",
      price: "$200",
      duration: "5 days",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/904789/pexels-photo-904789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Kalsubai Peak",
      location: "Bhandardara, Maharashtra",
      desc: "Mount Kalsubai is a famous trekking destination in Maharashtra",
      bigDesc:
        "At a distance of 12 km from Bhandardara, 165 km from Mumbai & 174 km from Pune, Kalsubai Peak is a mountain peak in Sahyadri Hills in Ahmednagar district of Maharashtra.",
      price: "$130",
      duration: "3 days",
    },
  ];

  return (
    <View style={styles.explore}>
      <ScrollView>
        <View style={styles.explore__imageContainer}>
          <Image
            style={styles.explore__image}
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/b/b4/Adventure-clouds-environment-672358.jpg",
            }}
          ></Image>
          <View style={styles.explore__headerContainer}>
            <Text style={styles.explore__header}>Explore</Text>
            <Text style={styles.explore__headerDesc}>
              Trekking, mountains & much more
            </Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View>
            {data.map((place) => (
              <Card
                image={place.image}
                title={place.title}
                desc={place.desc}
                id={place.id}
                location={place.location}
                navigation={props.navigation}
                key={place.id}
                bigDesc={place.bigDesc}
                price={place.price}
                duration={place.duration}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  explore: {
    flex: 1,
  },
  explore__imageContainer: {
    width: "100%",
    height: height / 2.5,
  },
  explore__image: {
    borderBottomRightRadius: 50,
    width: "100%",
    height: "100%",
  },
  explore__headerContainer: {
    bottom: 40,
    position: "absolute",
    left: 30,
  },
  explore__header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  explore__headerDesc: {
    color: "white",
    fontSize: 16,
  },
});

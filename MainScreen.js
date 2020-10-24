import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";
import Input from "../components/Input";
import ImageContainer from "../components/ImageContainer";

const paddTop = Platform.OS === "ios" ? 20 : 40;
export default function MainScreen(props) {
  return (
    <View>
      <SafeAreaView style={styles.header}>
        <View style={{ flex: 0.6 }}>
          <Text style={styles.headerText}>Find you next Trip!</Text>
        </View>
        <View
          style={{
            flex: 0.35,
            paddingTop: paddTop + 10,
            alignItems: "flex-end",
          }}
        >
          <Image
            source={{
              uri:
                "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-Vikings-Travis-Fimmel.jpg",
            }}
            style={styles.headerImage}
          />
        </View>
      </SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <Input placeholder="Search" />
      </View>
      <ImageContainer navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
  headerText: {
    paddingTop: paddTop,
    fontSize: 45,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  headerImage: {
    paddingTop: paddTop,
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});

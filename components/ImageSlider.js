import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.92);

const ImageSlider = ({ item, index }) => {
  // const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container} key={index}>
        <ImageBackground source={{ uri: item.imgUrl }} style={styles.image}>
          <Text numberOfLines={1} style={styles.header}>
            {item.title}
          </Text>
          <Text numberOfLines={1} style={styles.name}>
            Sayed Monshurul Alam
          </Text>
          <Text numberOfLines={1} style={styles.date}>
            21-07-2023
          </Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: ITEM_WIDTH,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
  },
  header: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 120,
    // backgroundColor: "red",
    // flex: 1,
    textAlign: "left",
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },

  name: {
    color: "#fff",
    paddingLeft: 12,
    fontSize: 12,
    opacity: 0.8,
  },

  date: {
    color: "#fff",
    paddingLeft: 12,
    fontSize: 12,
    opacity: 0.8,
  },
});

export default ImageSlider;

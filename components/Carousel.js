import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants/constant";
import { SafeAreaView } from "react-native-safe-area-context";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const slides = [
    require("../assets/images/fn1.jpg"),
    require("../assets/images/fn2.jpg"),
    require("../assets/images/fn3.jpg"),
    require("../assets/images/fn3.jpg"),
    require("../assets/images/fn3.jpg"),
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 5,
          width: "93%",
          marginTop: 2,
          // marginLeft: SIZES.marginLeft,
          // marginRight: SIZES.marginRight,
        }}
        autoplay
        cirleloop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: "center",
  },
});

import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import { Category, SearchField, Carousel } from "../components/index";
import { CATEGORIES, SIZES } from "../constants/constant";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SliderBox } from "react-native-image-slider-box";
import ImageSlider from "../components/ImageSlider";
import { ScrollView } from "react-native-gesture-handler";
import ImageSliderRow from "../components/ImageSliderRow";

const { width } = Dimensions.get("window");

const height = (width * 100) / 99;

const HomeScreen = () => {
  const navigation = useNavigation();

  const images = [
    {
      id: "1",
      title: "Image 1",
      source: require("../assets/images/fn1.jpg"),
    },
    {
      id: "2",
      title: "Image 2",
      source: require("../assets/images/fn2.jpg"),
    },
    {
      id: 3,
      title: "Image 2",
      source: require("../assets/images/fn2.jpg"),
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <SearchField />
        </View>
        <View
          style={{
            // backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FlatList
            data={CATEGORIES}
            renderItem={({ item }) => <Category title={item.name} />}
            keyExtractor={(item, index) => item._id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ marginTop: 5 }}>
          <ImageSliderRow />
        </View>
        <View>
          <Text>asdasassd</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: SIZES.paddingLeft,
    paddingRight: SIZES.paddingRight,
    // backgroundColor: "green",
  },
});

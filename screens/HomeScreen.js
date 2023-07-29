import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import {
  Category,
  SearchField,
  Carousel,
  Heading,
  NewsCard,
} from "../components/index";
import { NEWS } from "../constants/news";
import { CATEGORIES, SIZES } from "../constants/constant";
import { useNavigation } from "@react-navigation/native";
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
        <View style={{ marginTop: 5, flex: 1 }}>
          {/* <ImageSliderRow /> */}
          <Carousel />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Heading title={"Latest News"} />
          <TouchableOpacity>
            <Text>View All</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={NEWS}
            renderItem={({ item }) => <NewsCard item={item} />}
            keyExtractor={(item, index) => item.id}
            showsHorizontalScrollIndicator={false}
          />
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

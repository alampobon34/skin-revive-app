import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Category, SearchField, Carousel } from "../components/index";
import { CATEGORIES, SIZES } from "../constants/constant";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SliderBox } from "react-native-image-slider-box";
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SearchField />
        <View>
          <FlatList
            data={CATEGORIES}
            renderItem={({ item }) => <Category title={item.name} />}
            keyExtractor={(item, index) => item._id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <Carousel />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingLeft: SIZES.paddingLeft,
    paddingRight: SIZES.paddingRight,
  },
});

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/constant";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const SearchField = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <TextInput
            value=""
            onPressIn={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        <View style={styles.searchIcon}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SearchTab", { screen: "SearchList" })
            }
          >
            <Ionicons
              name="search-sharp"
              size={SIZES.iconSize}
              color={"#fff"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.paddingHorizontal,
  },

  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 5,
    // backgroundColor: "red",
    marginTop: 12,
  },
  searchInput: {
    flex: 1,
    borderColor: COLORS.red,
    borderWidth: 0.5,
    paddingLeft: 5,
    height: "100%",
    padding: 5,
  },
  searchIcon: {
    height: "100%",
    backgroundColor: COLORS.red,
    borderColor: COLORS.red,
    borderWidth: 0.5,
    padding: 5,
  },
});

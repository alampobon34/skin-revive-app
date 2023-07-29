import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Category = ({ title }) => {
  return (
    <View style={styles.category}>
      <TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {
    // padding: 16,
    // backgroundColor: "yellow",
    // width: "60%",
    // height: 100,
    marginRight: 10,
    paddingRight: 10,
    paddingVertical: 5,
  },

  text: {
    fontFamily: "semibold",
  },
});

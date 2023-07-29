import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {index} = route.params;


  return (
    <View>
      <Text>DetailsScreen{index}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});

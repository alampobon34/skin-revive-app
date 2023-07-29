import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SearchScreen, SearchListScreen } from "../screens/index";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const SearchStack = createNativeStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator initialRouteName="Search">
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Search",
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerShown: true,
        }}
      />

      <SearchStack.Screen
        name="SearchList"
        component={SearchListScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Search Result",
          headerTintColor: "black",
          headerTitleAlign: "center",
          // headerShown: false,
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;

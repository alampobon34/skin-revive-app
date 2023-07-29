import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  HomeScreen,
  NotificationScreen,
  DetailsScreen,
} from "../screens/index";
import { Fontisto } from "@expo/vector-icons";
import { SIZES } from "../constants/constant";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Home",
          headerTitleAlign: "center",
          headerRight: (props) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <Fontisto
                style={{ paddingRight: SIZES.paddingRight }}
                name="bell"
                size={SIZES.iconSize}
              />
            </TouchableOpacity>
          ),

          headerLeft: (props) => (
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  paddingLeft: SIZES.paddingLeft,
                }}
                source={require("../assets/logo.png")}
              />
            </View>
          ),
        })}
      />

      <HomeStack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Notification",
          headerTintColor: "black",
          headerTitleAlign: "center",
        }}
      />

      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Details",
          headerTintColor: "black",
          headerTitleAlign: "center",
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;

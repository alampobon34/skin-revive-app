import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { BookmarkScreen } from "../screens/index";
import { Ionicons, Feather } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/constant.js";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeStackNavigator from "./HomeStackNavigator";
import SearchStackNavigator from "./SearchStackNavigator";
import AuthStackNavigator from "./AuthStackNavigator";
// import IonIcon from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarInactiveTintColor: COLORS.bottomHover,
        tabBarActiveTintColor: COLORS.red,
        tabBarHideOnKeyboard: true,
        headerShown: true,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={SIZES.iconSize}
                color={focused ? COLORS.red : COLORS.bottomHover}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchStackNavigator}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"search-sharp"}
                size={SIZES.iconSize}
                color={focused ? COLORS.red : COLORS.bottomHover}
              />
            );
          },
          headerTitleAlign: "center",
          headerTitle: "Search",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="BookmarkTab"
        component={BookmarkScreen}
        options={{
          tabBarLabel: "Bookmark",
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name={"bookmark"}
                size={SIZES.iconSize}
                color={focused ? COLORS.red : COLORS.bottomHover}
              />
            );
          },
          headerTitleAlign: "center",
          headerTitle: "Bookmark",
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={AuthStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"person-outline"}
                size={SIZES.iconSize}
                color={focused ? COLORS.red : COLORS.bottomHover}
              />
            );
          },
          headerTitleAlign: "center",
          headerShown: false,
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

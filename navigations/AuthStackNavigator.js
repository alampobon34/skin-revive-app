import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LoginScreen, RegisterScreen, ProfileScreen } from "../screens/index";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="Profile">
      <AuthStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Profile",
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerBackTitle: "",
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Login",
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerBackTitle: "",
        }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Register",
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerBackTitle: "",
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;

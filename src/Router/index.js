import React from "react";
import {
  Splash,
  Home,
  Chat,
  Setting,
  Search,
} from "../screen";
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {HomeOn,
  HomeOff,
  ChatOn,
  ChatOff,
  SettOn,
    SettOff,
    SearchOn,
    SearchOff,}
    from "../assets/img";

import { Image, TouchableOpacity, View } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName={MainApp}
      screenOptions={({ route }) => ({
        tabBarStyle:{
          height: 70
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? HomeOn : HomeOff;
          } else if (route.name === "Chat") {
            iconName = focused ? ChatOn : ChatOff;
          } else if (route.name === "Search") {
            iconName = focused ? SearchOn : SearchOff;
          } else if (route.name === "Setting") {
            iconName = focused ? SettOn : SettOff;
          }
          return (
            <View style={{ height: 60, }}>
              <TouchableOpacity
                onPress={() => navigation.navigate(route.name)}
              >
                <Image
                  source={iconName}
                  style={{ width: 60, height: 60, marginVertical: 5 }}
                />
              </TouchableOpacity>
            </View>
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};


const Router = () => {
    return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
}
export default Router
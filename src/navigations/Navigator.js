import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Favourite from "../screens/Favourite";
import Profile from "../screens/Profile";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  let tabScreens = [
    { name: "Home", component: Home, image: require("../images/8.png") },
    {
      name: "Favourite",
      component: Favourite,
      image: require("../images/9.png"),
    },
    { name: "Profile", component: Profile, image: require("../images/10.png") },
  ];

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 65,
          justifyContent: "center",
          paddingVertical: 15,
          backgroundColor: "#eff4f0",
          elevation: 2,
        },
      }}
    >
      {tabScreens.map((screen, index) => {
        return (
          <Tab.Screen
            name={screen.name}
            component={screen.component}
            key={index}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={screen.image}
                  style={{ height: 20, width: 20 }}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

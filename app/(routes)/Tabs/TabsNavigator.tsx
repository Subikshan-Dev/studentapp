import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "@/Screens/home/homepage";
// import SettingsScreen from "../Screens/SettingsScreen";
// import ProfileScreen from "../Screens/ProfileScreen";
// import AnotherScreen from "../Screens/AnotherScreen"; // Add your fourth screen here
import { Ionicons } from "@expo/vector-icons";
import { Tabs, TabBarOptions } from "expo-router";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }
          //   } else if (route.name === "Settings") {
          //     iconName = focused ? "settings" : "settings-outline";
          //   } else if (route.name === "Profile") {
          //     iconName = focused ? "person" : "person-outline";
          //   } else if (route.name === "AnotherScreen") {
          //     iconName = focused ? "list" : "list-outline";
          //   }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      TabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomePage} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="AnotherScreen" component={AnotherScreen} /> */}
    </Tab.Navigator>
  );
}

export default MyTabs;

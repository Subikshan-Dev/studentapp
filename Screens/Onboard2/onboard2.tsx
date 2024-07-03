import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default function Onboard2Screen() {
  return (
    <View className="flex-1 justify-center items-center">
       <View className="isolate">
            <Text className="font-bold text-2xl text-innovat-blue absolute right-16 bottom-32">Drawing</Text>
            <Image className=" left-1 bottom-20" resizeMode="center" source={require("@/assets/img/Forward Arrow.png")} />
            <Text className="font-bold text-2xl text-innovat-blue absolute  left-16 bottom-20">Illustrator</Text>
      </View> 
      <View className="">
            <Image className="top-px left-1 w-64 h-64  " resizeMode="center" source={require("@/assets/img/Ellipse 2.png")} />
            <Image className="top-px left-1 w-20 h-20 absolute" resizeMode="contain" source={require("@/assets/img/Age 11.png")} />
           
      </View> 
      <View className="top-10 items-centre justify-center">
        <Text className="font-bold text-2xl text-innovat-blue"> Create 1000 doodle </Text>
        <Text className="font-bold text-2xl text-innovat-blue"> sketches/drawings </Text> 
      </View>
      <View  className="top-16 justify-center items-center">
        <Text className="font-Semibold text-base text-innovat-bdgray2">Based on Mike Rohde</Text>
        <Text  className="font-Semibold text-base text-innovat-bdgray2">drawing techniques in 90 days.</Text>
      </View>
      <View className="top-24">
        <TouchableOpacity onPress={() => router.push("/(routes)/onboard3")}>
        <View className="bg-innovat-orange flex-row p-0 rounded-lg w-80 justify-center ">
          <Text className="items-centre  text-xl  text-white align-text-top p-3 ">CHOOSE PLAN</Text>
          {/* <Image className="top-px left-1" resizeMode="center" source={require("@/assets/icons/Arrow right.png")} /> */}
        </View>
      </TouchableOpacity>
      </View>
      
      <View className="top-28">
        <Text className="font-Semibold text-base text-innovat-bdgray2">Like this for your child</Text>
      </View>
    </View>
  )
}
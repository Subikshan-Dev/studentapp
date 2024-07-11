import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default function Onboard3Screen() {
  return (
    <View className="flex-1 justify-center items-center">
       <View className="isolate">
            <Text className="font-bold text-2xl text-innovat-blue absolute right-16 bottom-28">Physics</Text>
            <Image className=" left-1 bottom-16" resizeMode="center" source={require("@/assets/img/Forward Arrow.png")} />
            <Text className="font-bold text-2xl text-innovat-blue absolute  left-4 bottom-16"> Space Scientist</Text>
      </View> 
      <View className="">
            <Image className="top-px left-1 w-64 h-64  " resizeMode="center" source={require("@/assets/img/skill 1.png")} />
            <Image className="top-px left-44 w-20 h-20 absolute" resizeMode="contain" source={require("@/assets/img/Age 13.png")} />
            <Image className="top-52 left-4 w-64 h-24 absolute " resizeMode="contain" source={require("@/assets/img/Rectangle 13.png")} />
           
      </View> 
      <View className="top-10 items-centre justify-center">
        <Text className="font-bold text-2xl text-innovat-blue"> Build a rocket that can </Text>
        <Text className="font-bold text-2xl text-innovat-blue">    propel up to 500 m</Text> 
      </View>
      <View  className="top-16 justify-center items-center">
        <Text className="font-Semibold text-base text-innovat-bdgray2">In space by researching different </Text>
        <Text  className="font-Semibold text-base text-innovat-bdgray2">methods of rocket propulsion and</Text>
        <Text  className="font-Semibold text-base text-innovat-bdgray2">by conducting experiments</Text>
      </View>
      <View className="top-24">
        <TouchableOpacity onPress={() => router.push("/(routes)/onboard4")}>
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
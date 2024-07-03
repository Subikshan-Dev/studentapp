import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default function Onboard4Screen() {
  return (
    <View className="flex-1 justify-center items-center">
       <View className="isolate">
            <Text className="font-bold text-2xl text-innovat-blue absolute right-8 bottom-28">Mathematics</Text>
            <Image className=" left-1 bottom-14" resizeMode="center" source={require("@/assets/img/Forward Arrow.png")} />
            <Text className="font-bold text-2xl text-innovat-blue absolute  left-8 bottom-16">Programming</Text>
      </View> 
      <View className="">
            <Image className="top-px left-1 w-72 h-72  " resizeMode="center" source={require("@/assets/img/Career 1.png")} />
            <Image className="top-20 left-48 w-20 h-20 absolute" resizeMode="contain" source={require("@/assets/img/Age 15.png")} />
            
      </View> 
      <View className="top-10 items-centre justify-center text-justify">
        <Text className="font-bold text-2xl text-innovat-blue">Create 30 fun python program</Text>
        <Text className="font-bold text-2xl text-innovat-blue">        with specific outputs</Text> 
      </View>
      <View  className="top-16 justify-center items-center">
        <Text className="font-Semibold text-base text-innovat-bdgray2">using functions, loops, classes, </Text>
        <Text  className="font-Semibold text-base text-innovat-bdgray2">objects, methods, files</Text>
        
      </View>
      <View className="top-24">
        <TouchableOpacity onPress={() => router.push("/(routes)/onboard5")}>
        <View className="bg-innovat-orange flex-row p-0 rounded-lg w-80 justify-center ">
          <Text className="items-centre  text-xl  text-white align-text-top p-3 ">CHOOSE PLAN</Text>
          {/* <Image className="top-px left-1" resizeMode="center" source={require("@/assets/icons/Arrow right.png")} /> */}
        </View>
      </TouchableOpacity>
      </View>
      
      <View className="top-24">
        <Text className="font-Semibold text-base text-innovat-bdgray2">Like this for your child</Text>
      </View>
    </View>
  )
}
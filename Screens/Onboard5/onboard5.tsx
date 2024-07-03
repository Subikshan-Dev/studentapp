import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default function Onboard5Screen() {
  return (
    <View className="flex-1 justify-center items-center">
       <View className="isolate">
            <Text className="font-bold text-2xl text-innovat-blue absolute right-12 bottom-28">Imagination </Text>
            <Image className=" left-1 bottom-14" resizeMode="center" source={require("@/assets/img/Forward Arrow.png")} />
            <Text className="font-bold text-2xl text-innovat-blue absolute  left-4 bottom-18">Product Designer</Text>
      </View> 
      <View className="">
            <Image className="top-px left-1 w-64 h-64  " resizeMode="center" source={require("@/assets/img/Ellipse 2-1.png")} />
            <Image className="bottom-44 left-48 w-20 h-20 absolute" resizeMode="contain" source={require("@/assets/img/Age 16.png")} />
            
      </View> 
      <View className="top-10 items-centre justify-center text-justify">
        <Text className="font-bold text-2xl text-innovat-blue">Create 12 household products </Text>
        <Text className="font-bold text-2xl text-innovat-blue">        which are functionally</Text> 
      </View>
      <View  className="top-16 justify-center items-center">
        <Text className="font-Semibold text-base text-innovat-bdgray2">useful and aesthetically elegant  </Text>
        <Text  className="font-Semibold text-base text-innovat-bdgray2">using wood and other materials.</Text>
        
      </View>
      <View className="top-24">
        <TouchableOpacity onPress={() => router.push("/(routes)/login")}>
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
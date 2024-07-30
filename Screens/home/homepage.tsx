import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { Pressable } from "react-native";
import Dropdown from "@/components/Dropdown/dropdown";

import * as DocumentPicker from "expo-document-picker";

const HomePage = () => {
  let StudentName = "{Student Name}";

  return (
    <ScrollView className="flex-grow  bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="top-6  ">
        <Image
          className="h-24 right-[160]  "
          resizeMode="center"
          source={require("@/assets/img/innologo.png")}
        />
        <Image
          className="absolute h-[30] left-80 top-10    "
          resizeMode="center"
          source={require("@/assets/img/Generic avatar.png")}
        />
      </View>
      <View className=" border-b border-gray-400 mt-4 mb-2 w-full" />
      <View className="flex-row items-center justify-between ml-2  mt-2 w-full">
        <Text className="text-sm font-thin text-innovat-bdgray">
          Welcome {StudentName}
        </Text>
      </View>
      <View className="m-2  mt-6 border  border-innovat-bdgray3 h-[350] rounded-lg drop-shadow-2xl	 ">
        <Text className="text-base mt-4 ml-4 text-innovat-blue">
          Student Name
        </Text>
        <Text className="text-sm ml-4 text-innovat-gray">
          List of Indivdual Learning Plans
        </Text>
        <View className="absolute h-8 bg-innovat-yellow w-8 rounded-md left-4 top-20 justify-center items-center">
          <Text className="text-xl text-white">1</Text>
        </View>
        <Text className="absolute top-[82] left-14 text-innovat-yellow text-base">
          IECP
        </Text>

        <Text className="mt-16 ml-4 items-center justify-center p-2.5 leading-6">
          Discover Bright Spots How to Find 100 Shining Qualitiesin Your Child
          Bright Spots are glimpses of your child's hidden talent, skill and
          they indicate your child's unique strength and traits.If education
          revolves around their bright spots, your child can achieve greater
          success and amazing career opportunities.
        </Text>
      </View>
      <View className="m-2  mt-6 border  border-innovat-bdgray3 h-[900] rounded-lg drop-shadow-2xl mb-10 	">
        <Text className="text-base mt-4 ml-4 text-innovat-blue">
          Update your daily Goal
        </Text>
        <Text className="text-sm ml-4 text-innovat-gray">
          How to set ,Review Dily Goals?
        </Text>
        <View className="absolute h-8 bg-innovat-yellow w-8 rounded-md left-44 top-24 justify-center items-center">
          <Text className="text-xl text-white">1</Text>
        </View>
        <Text className="mt-16 ml-4 items-center justify-center p-2.5 leading-6 text-innovat-yellow text-center">
          Discover Bright Spots How to Find 100 Shining Qualitiesin Your Child
          Bright Spots are glimpses of your child's hidden talent, skill and
          they indicate your child's unique strength and traits.If education
          revolves around their bright spots, your child can achieve greater
          success and amazing career opportunities.
        </Text>
        <View>
          <Text className="text-sm mt-4 ml-4 ">Today’s Goal</Text>
          <TextInput
            className="bg-innovat-bdgray4 p-4 justify-center rounded-md mt-4 m-4"
            maxLength={300}
            multiline
            editable
            numberOfLines={4}
            placeholder="Enter Today’s Smart Goal here"
          />
        </View>
        <View>
          <Text className="text-sm mt-4 ml-4">How did I do my work today</Text>
          <View className=" w-full left-3 mt-4">
            <Dropdown
              data={[
                { value: "Option 1", label: "Option 1" },
                { value: "Option 2", label: "Option 2" },
                { value: "Option 3", label: "Option 3" },
              ]}
              onChange={console.log}
              placeholder="Reflect about your Work"
            />
          </View>
          <Text className="text-sm mt-4 ml-4">Upload Your File Here</Text>
          <TouchableOpacity>
            <View className=" m-4 items-center mb-6 bg-yellow-100 h-12 rounded-lg  ">
              <View className="bg-innovat-bdgray4 h-12 w-36 z-10 rounded-l-lg justify-center items-center right-[109]">
                <Text>Choose File</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="m-4 justify-center items-center bg-blue-500 p-2 rounded-lg">
              <Text className="text-white text-xl">Submit</Text>
            </View>
          </TouchableOpacity>

          <View></View>
        </View>
      </View>
      <View className="ml-2 mr-2 mb-4 h-[500] border border-innovat-bdgray3 rounded-lg text-xs">
        <View className="flex flex-row gap-[4] mt-6 mr-[10] ml-[8]  mb-16">
          <View className="bg-yellow-200 w-20 justify-center items-center flex-2 rounded-sm ">
            <Text>Progress</Text>
          </View>
          <View className="bg-green-200 w-20 justify-center items-center flex-1 rounded-sm">
            <Text>Daily Feedback</Text>
          </View>
          <View className="bg-violet-200 w-20 justify-center items-center flex-2 rounded-sm">
            <Text>Reviews</Text>
          </View>
          <View className="bg-red-200 w-20 justify-center items-center flex-2 rounded-sm">
            <Text>Photos</Text>
          </View>
        </View>

        <View className="flex flex-row gap-14">
          <View className="flex flex-row gap-3 m-2 text-xs">
            <View className="bg-yellow-100 w-16 rounded-sm justify-center items-center">
              <Text className="text-innovat-yellow  text-xs">Started :</Text>
            </View>
            <Text className=" text-xs">May 1, 2024</Text>
          </View>
          <View className="flex flex-row gap-3 m-2 text-xs">
            <View className="bg-yellow-100 w-12 h-5  rounded-sm justify-center items-center">
              <Text className="text-innovat-yellow  text-xs">Ends :</Text>
            </View>
            <Text className=" text-xs">Sept 1, 2025</Text>
          </View>
        </View>
        <View className="m-4 justify-center items-center p-2 ">
          <View className="bg-yellow-100">
            <Text className="p-1 pl-5 pr-5 text-base rounded-lg text-innovat-yellow">
              Goals
            </Text>
          </View>
        </View>
        <View className="bg-innovat-lblue m-4 rounded-lg pt-6 pb-6">
          <Text className="p-1 leading-5 text-center text-blue-600">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;

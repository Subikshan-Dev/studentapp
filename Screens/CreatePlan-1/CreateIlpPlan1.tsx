import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const CreateILPPlan = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
    const handleOptionSelect = (option: string) => {
      setSelectedOption(option);
    };

  return (
    <View className="flex-1 items-center justify-center bg-white pt-4">
      <View className="bottom-32 w-full p-8">
        <Text className="text-lg font-bold text-center col-span-1 text-innovat-blue">
          ILP PLAN TYPE
        </Text>
      </View>

      <View className="flex flex-row flex-nowrap justify-around bottom-36 m-0 space-x-4 right-2">
        <View className="absolute left-10 right-10 bottom-8 h-2 border-b border-dashed border-gray-400 " />
        <Text className="p-5 bg-blue-500 rounded-lg font-semibold text-gray-50 px-6 relative text-base">
          1
        </Text>
        <Text className="p-5 bg-innovat-liblue rounded-lg font-semibold text-white px-6 relative text-base ">
          2
        </Text>
        <Text className="p-5 bg-innovat-liblue rounded-lg font-semibold text-white px-6 relative text-base">
          3
        </Text>
        <Text className="p-5 bg-innovat-liblue rounded-lg font-semibold text-white px-6 relative text-base">
          4
        </Text>
        <Text className="p-5 bg-innovat-liblue rounded-lg font-semibold text-white px-6 relative text-base">
          5
        </Text>
      </View>

      <Text className="text-justify text-xl bottom-32 font-semibold text-innovat-orange">
        Choose ILP Type
      </Text>

      <Text className="text-center text-sm bottom-32 font-normal text-innovat-gray p-2">
        Choose Your Plan with consultancy of our Experts for your Child
      </Text>

      <TouchableOpacity onPress={() => handleOptionSelect("option1")}>
        <View
          className={`flex bottom-24 border border-dashed border-blue-600 p-2 items-center justify-center mx-1 leading-relaxed ${
            selectedOption === "option1" ? "bg-blue-100" : "bg-white"
          } rounded-lg`}
        >
          <Text className="p-2 text-lg font-semibold ">90 Days Plan</Text>
          <Text className="m-2 text-gray-600 bottom-2">    Create a Term (90 Days) ILP Plan For    </Text>
          <Text className="text-gray-600 bottom-2">Building a skill</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleOptionSelect("option2")}>
        <View
          className={`flex bottom-24 border border-dashed border-blue-600 p-2 items-center justify-center mx-1 leading-relaxed mt-10 ${
            selectedOption === "option2" ? "bg-blue-100" : "bg-white"
          } rounded-lg`}
        >
          <Text className="p-2 text-lg font-semibold">Short 30 Days Plan</Text>
          <Text className="whitespace-pre-line m-2 text-gray-600 bottom-2">
              Create a Short 15 days or 30 days ILP For    
          </Text>
          <Text className="text-gray-600 bottom-2">Building a skill</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View className="bg-blue-500 flex-row p-0 rounded-lg w-32 justify-center left-11 absolute">
          <Text className="items-centre top-3 text-base left-3 text-white align-text-top">Continue</Text>
          <Image className="top-px left-1" resizeMode="center" source={require("@/assets/icons/Arrow right.png")} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => router.push("/(routes)/welcome-intro")}
        >
        <View className="bg-sky-50 flex-row p-0 rounded-lg w-32 justify-center right-10 absolute">
          <Image className="right-5" resizeMode="center" source={require("@/assets/icons/Arrow left.png")} />
          <Text className="items-centre top-3 right-4 align-text-top text-blue-500 text-base">Back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CreateILPPlan;

import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";

const CreateILPPlan2 = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
    const handleOptionSelect = (option: string) => {
      setSelectedOption(option);
    };

  return (
    
    <View className="flex-1 items-center justify-center bg-white pt-4">
      <View className="bottom-32 w-full p-8">
        <Text className="text-lg font-bold text-center col-span-1 text-innovat-blue">
        Plan Date & Type
        </Text>
      </View>

      <View className="flex flex-row flex-nowrap justify-around bottom-36 m-0 space-x-4 right-2">
        <View className="absolute left-10 right-10 bottom-8 h-2 border-b border-dashed border-gray-400 " />
        <Text className="p-5 bg-blue-500 rounded-lg font-semibold text-gray-50 px-6 relative text-base">
          1
        </Text>
        <Text className="p-5 bg-innovat-liblue rounded-lg font-semibold text-blue-500 px-6 relative text-base ">
          2
        </Text>
        <Text className="p-5 bg-innovat-liblue rounded-lg font-semibold text-blue-500 px-6 relative text-base">
          3
        </Text>
        <Text className="p-5 bg-innovat-liblue rounded-lg font-semibold text-blue-500 px-6 relative text-base">
          4
        </Text>
        <Text className="p-5 bg-innovat-liblue rounded-lg font-semibold text-blue-500 px-6 relative text-base">
          5
        </Text>
      </View>

      <Text className="text-justify text-xl bottom-32 font-semibold text-innovat-orange">
      Learner Plan Details
      </Text>

      <Text className="text-center text-sm bottom-32 font-normal text-innovat-gray p-2">
      Select Learner from the list,Plan Type and Set dates 
      </Text>
      <Text className="text-center text-sm bottom-32 font-normal text-innovat-gray p-2">
      
      </Text>
      

      <View className="w-80 h-64 justify-center  items-center bottom-28 border rounded-xl border-innovat-gray ">
        <Text className="bottom-24 right-24">
        Learner Name
        </Text>
        <Image className=" right-12 bottom-28 align-text-bottom " resizeMode="center" source={require("@/assets/img/req.png")} />
        <View className="bg-innovat-bdgray4 w-72  h-10 rounded absolute justify-start top-10">
            <Text className="text-innovat-bdgray3 top-2 left-2 ">Select Learner</Text>
        </View>
        
      </View>
      
      <TouchableOpacity
      onPress={() => router.push("/(routes)/test")}>
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

export default CreateILPPlan2;

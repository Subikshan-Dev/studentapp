import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View, Image, TouchableOpacity, TextInput, Button, Platform,ScrollView,Handle } from "react-native";
import { countries } from "@/utils/dumy";
import Dropdown from "@/components/Dropdown/dropdown";
import DateTimePicker from '@react-native-community/datetimepicker';


const CreateILPPlan4 = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
           <View className="flex-1 items-center justify-center bg-white pt-4">
      <View className=" w-full p-8">
        <Text className="text-xl font-bold text-center col-span-1 text-innovat-blue">
        Skill Details
        </Text>
      </View>

      <View className="flex flex-row flex-nowrap justify-around  m-4 space-x-4 right-2 ">
        <View className="absolute left-10 right-10  h-2 border-b border-dashed border-gray-400 top-8" />
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

      <Text className="text-justify text-xl  font-semibold text-innovat-orange">
      Learner Skill Details
      </Text>

      <Text className="text-center text-sm  font-normal text-innovat-gray p-2">
      Understand Academic Skills, Professional Skills and
 personality Skills.
      </Text>
      <Text className="text-center text-sm  font-normal text-innovat-gray p-2"></Text>


      <View className=" relative w-10/12 h-[680] border rounded-xl border-innovat-gray p-4 bottom-2">
          <Text className="mt-4">
          Edison Skill
          </Text>
         
          <View className="bg-innovat-bdgray4 rounded w-full mt-4 ">
          <Dropdown
            data={[
              { value: "Option 1", label: "Option 1" },
              { value: "Option 2", label: "Option 2" },
              { value: "Option 3", label: "Option 3" },
            ]}
            onChange={console.log}
            placeholder="Select Edison Skill"
          />
            </View>
            <Text className="mt-4">
            Edison Skill Level
          </Text>
         
          <View className="bg-innovat-bdgray4 rounded w-full mt-4 ">
          <Dropdown
            data={[
              { value: "Option 1", label: "Option 1" },
              { value: "Option 2", label: "Option 2" },
              { value: "Option 3", label: "Option 3" },
            ]}
            onChange={console.log}
            placeholder="Select Edison Skill Level"
          />
            </View>
            <Text className="mt-4">
            Professional Skill
          </Text>
         
          <View className="bg-innovat-bdgray4 rounded w-full mt-4 ">
          <Dropdown
            data={[
              { value: "Option 1", label: "Option 1" },
              { value: "Option 2", label: "Option 2" },
              { value: "Option 3", label: "Option 3" },
            ]}
            onChange={console.log}
            placeholder="Select Professional Skill"
          />
            </View>
            <Text className="mt-4">
            Professional Skill Level
          </Text>
         
          <View className="bg-innovat-bdgray4 rounded w-full mt-4 ">
          <Dropdown
            data={[
              { value: "Option 1", label: "Option 1" },
              { value: "Option 2", label: "Option 2" },
              { value: "Option 3", label: "Option 3" },
            ]}
            onChange={console.log}
            placeholder="Select Professional Skill Level"
          />
            </View>
            <Text className="mt-4">
            Academic Skill
          </Text>
         
          <View className="bg-innovat-bdgray4 rounded w-full mt-4 ">
          <Dropdown
            data={[
              { value: "Option 1", label: "Option 1" },
              { value: "Option 2", label: "Option 2" },
              { value: "Option 3", label: "Option 3" },
            ]}
            onChange={console.log}
            placeholder="Select Academic Skill "
          />
            </View>
            <Text className="mt-4">
            Academic Skill Level
          </Text>
         
          <View className="bg-innovat-bdgray4 rounded w-full mt-4 ">
          <Dropdown
            data={[
              { value: "Option 1", label: "Option 1" },
              { value: "Option 2", label: "Option 2" },
              { value: "Option 3", label: "Option 3" },
            ]}
            onChange={console.log}
            placeholder="Select Academic Skill Level"
          />
            </View>
          

          
      </View>
      
      
      
      
      <View className="flex-row justify-center space-x-16 px-4 m-11 left-4">
      <TouchableOpacity onPress={() => router.push("/(routes)/test")}>
          <View className="bg-sky-50 flex-row p-1 rounded-lg w-36 justify-center items-center">
            <View className="flex-row" >
              <Image
            className="right-2"
            resizeMode="center"
            source={require("@/assets/icons/Arrow left.png")}
          />
          <Text className="text-base text-blue-500 top-2 right-4">Back</Text>
            </View>
          
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(routes)/test")}>
      <View className="bg-blue-500 flex-row p-1 rounded-lg w-36 justify-center items-center">
        <View className="flex-row">
          <Text className="text-base text-white top-2 left-2">Continue</Text>
          <Image
            className=" left-1"
            resizeMode="center"
            source={require("@/assets/icons/Arrow right.png")}
          />
        </View>
          
        </View>
      </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  );
};

export default CreateILPPlan4;

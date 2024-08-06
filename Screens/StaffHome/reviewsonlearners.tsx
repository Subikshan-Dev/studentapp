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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as DocumentPicker from "expo-document-picker";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Checkbox from "react-native-bouncy-checkbox";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const ReviewsOnLearners = () => {
  let Personalityskill = "{Personality skill}";
  const [text, setText] = useState("Enter smart Goal & progress measure");
  let newText;
  const handleTextChange = (newText: React.SetStateAction<string>) => {
    setText(newText);
    // You can add logic here to save the text, e.g., to local storage or a database
  };

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const [isChecked1, setIsChecked1] = useState(false);

  const toggleCheckbox1 = () => {
    setIsChecked1(!isChecked1);
  };
  return (
    <ScrollView className="top-5">
      <StatusBar barStyle="dark-content" />
      <View className="">
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
        <View className=" border-b border-gray-400  mb-2 w-full" />
      </View>
      <View className="justify-center items-center">
        <View className="bg-innovat-bdgray4 w-[350] h-11 rounded-md flex flex-row justify-center items-center ">
          <View className="right-6">
            <EvilIcons name="search" size={36} color="gray" />
          </View>
          <TextInput
            className="text-gray-500 font-thin"
            onChangeText={handleTextChange}
            placeholder="Search Learners or review comment"
            multiline
          />
        </View>
      </View>
      <View className="m-4 flex flex-row justify-between">
        <Text className="text-lg text-innovat-blue">
          My reviews on learners
        </Text>
        {/* <Checkbox
          size={25}
          fillColor="gray"
          unFillColor="#FFFFFF"
          iconStyle={{ borderColor: "red" }}
          innerIconStyle={{ borderWidth: 2 }}
          onPress={(isChecked: boolean) => {
            console.log(isChecked);
          }}
        /> */}
      </View>
      <View className="border border-innovat-bdgray3 h-auto w-92 m-4 rounded-md">
        <View className="flex flex-row justify-between m-4">
          <Text className="text-base m-2  text-innovat-gray">Learner</Text>
          <TouchableOpacity>
            <View className="bg-innovat-bdgray4 w-auto rounded-md pl-2 pr-2 flex flex-row  h-10">
              <Text className="text-base m-2">Modify</Text>
              <View className="top-2">
                <FontAwesome name="angle-down" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="text-base ml-5 bottom-4">Student Name</Text>
        </View>
        <View className="m-5 ">
          <View className="flex flex-row justify-between">
            <Text className="text-sm">Plan Type</Text>
            <View className="flex flex-row justify-between">
              <Text>End date:</Text>
              <Text>may 12,2024</Text>
            </View>
          </View>
        </View>
        <View className="flex justify-center items-center">
          <Text className="text-innovat-gray m-2 text-base">
            Personality skill
          </Text>
          <Text className="text-blue-600 text-base m-2">
            {Personalityskill}
          </Text>
          <Text className="text-innovat-bdgray text-sm m-2">Observation</Text>
          <View className="m-2">
            <TextInput
              className="text-innovat-bdgray1 text-sm pb-8"
              onChangeText={handleTextChange}
              multiline
              placeholder="Enter Observation"
              numberOfLines={6}
            />
          </View>
        </View>
        <View className="flex flex-row m-4 justify-between">
          <View className="">
            <Checkbox
              size={25}
              fillColor="gray"
              unFillColor="#FFFFFF"
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
          <View className="flex flex-row gap-2">
            <MaterialIcons name="mode-edit" size={22} color="gray" />
            <MaterialCommunityIcons
              name="delete-outline"
              size={22}
              color="gray"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReviewsOnLearners;

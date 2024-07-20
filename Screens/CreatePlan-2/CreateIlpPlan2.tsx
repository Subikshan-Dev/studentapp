import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View, Image, TouchableOpacity, TextInput, Button, Platform } from "react-native";
import { countries } from "@/utils/dumy";
import Dropdown from "@/components/Dropdown/dropdown";
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateILPPlan2 = () => {
  const formattedCountries = countries.map((c) => ({
    value: c.label,
    label: `${c.flag} ${c.label}`,
  }));
  const [date, setDate] = useState<Date>(new Date());
  const [date2, setDate2] = useState<Date>(new Date());

  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [showPicker2, setShowPicker2] = useState<boolean>(false);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowPicker(false); // Hide the picker
    if (selectedDate) {
      setDate(selectedDate); // Update the date state
    }
  };
  const handleDateChange2 = (event: any, selectedDate2?: Date) => {
    setShowPicker2(false); // Hide the picker
    if (selectedDate2) {
      setDate2(selectedDate2); // Update the date state
    }
  };
  const handlePress = () => {
    setShowPicker(true); // Show the date picker when the input is pressed
  };
  const handlePress2 = () => {
    setShowPicker2(true); // Show the date picker when the input is pressed
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
        Select Learner from the list, Plan Type and Set dates 
      </Text>
      <Text className="text-center text-sm bottom-32 font-normal text-innovat-gray p-2"></Text>

      <View className="w-80 h-72 justify-center items-center bottom-24 border rounded-xl border-innovat-gray ">
        <Text className="bottom-24 right-24">Learner Name</Text>
        <Image className=" right-10 bottom-28 align-text-bottom " resizeMode="center" source={require("@/assets/img/req.png")} />
        <View className="absolute top-8 w-full left-3">
          <Dropdown
            data={[
              { value: "Option 1", label: "Option 1" },
              { value: "Option 2", label: "Option 2" },
              { value: "Option 3", label: "Option 3" },
            ]}
            onChange={console.log}
            placeholder="Select Learner"
          />
        </View>
        <View className="top-10">
          <Text className="bottom-24 right-[112]">ILP Type</Text>
          <Image className=" right-14 bottom-28 align-text-bottom " resizeMode="center" source={require("@/assets/img/req.png")} />
        </View>

        <View className="absolute top-28 w-full left-3">
          <Dropdown
            data={[
              { value: "Option 1", label: "Option 1" },
              { value: "Option 2", label: "Option 2" },
              { value: "Option 3", label: "Option 3" },
            ]}
            onChange={console.log}
            placeholder="Select Plan"
          />
        </View>
        <View className="absolute top-[270]">
          <Text className="bottom-24 right-[110]">Start Date</Text>
          <Image className=" right-12 bottom-28 align-text-bottom " resizeMode="center" source={require("@/assets/img/req.png")} />
        </View>
        <View className="absolute top-[270] -right-5">
          <Text className="bottom-24 right-[110]">End Date</Text>
          <Image className=" right-12 bottom-28 align-text-bottom " resizeMode="center" source={require("@/assets/img/req.png")} />
        </View>
      </View>
      

      <View className="absolute top-[500] left-8">
        <TouchableOpacity onPress={handlePress} className="bg-innovat-bdgray4 p-3 w-36 justify-center rounded-md">
          <TextInput
            className="text-black justify-evenly text-center text-sm"
            value={date.toISOString().split('T')[0]} // Format date as YYYY-MM-DD
            editable={false} // Make the TextInput non-editable
          />
        </TouchableOpacity>
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleDateChange}
          />
        )}
      </View>
      <View className="absolute top-[500] right-[32]">
        <TouchableOpacity onPress={handlePress2} className="bg-innovat-bdgray4 p-3 w-36 justify-center rounded-md">
          <TextInput
            className="text-black justify-evenly text-center text-sm"
            value={date2.toISOString().split('T')[0]} // Format date as YYYY-MM-DD
            editable={false} // Make the TextInput non-editable
          />
        </TouchableOpacity>
        {showPicker2 && (
          <DateTimePicker
            value={date2}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleDateChange2}
          />
        )}
      </View>

      <TouchableOpacity onPress={() => router.push("/(routes)/test")}>
        <View className="bg-blue-500 flex-row p-0 rounded-lg w-32 justify-center left-11 absolute">
          <Text className="items-centre top-3 text-base left-3 text-white align-text-top">Continue</Text>
          <Image className="top-px left-1" resizeMode="center" source={require("@/assets/icons/Arrow right.png")} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(routes)/welcome-intro")}>
        <View className="bg-sky-50 flex-row p-0 rounded-lg w-32 justify-center right-10 absolute">
          <Image className="right-5" resizeMode="center" source={require("@/assets/icons/Arrow left.png")} />
          <Text className="items-centre top-3 right-4 align-text-top text-blue-500 text-base">Back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CreateILPPlan2;

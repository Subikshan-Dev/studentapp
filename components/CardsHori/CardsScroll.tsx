import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "@/tsconfig.json";

const SampleScrollView = () => {
  return (
    <ScrollView className="flex-1 p-4">
      {/* Vertical Scroll */}
      <View className="mb-8">
        <Text className="text-lg mb-4">Vertical Scroll</Text>
        <View className="border border-innovat-bdgray3 rounded-lg">
          <ScrollView className="h-64">
            {Array.from({ length: 10 }).map((_, index) => (
              <View key={index} className="p-4 border-b border-gray-200">
                <Text>Item {index + 1}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Horizontal Scroll */}
      <View className="mb-8">
        <Text className="text-lg mb-4">Horizontal Scroll</Text>
        <ScrollView horizontal={true} className="flex-row">
          {Array.from({ length: 5 }).map((_, index) => (
            <View
              key={index}
              className="p-4 w-40 border border-innovat-bdgray3 rounded-lg mr-4"
            >
              <Text>Card {index + 1}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Nested Scroll */}
      <View className="mb-8">
        <Text className="text-lg mb-4">Nested Scroll</Text>
        <ScrollView className="h-64 border border-innovat-bdgray3 rounded-lg">
          {Array.from({ length: 3 }).map((_, index) => (
            <View key={index} className="p-4 border-b border-gray-200">
              <Text className="mb-4">Section {index + 1}</Text>
              <ScrollView horizontal={true} className="flex-row">
                {Array.from({ length: 3 }).map((_, subIndex) => (
                  <View
                    key={subIndex}
                    className="p-4 w-40 border border-innovat-bdgray3 rounded-lg mr-4"
                  >
                    <Text>Item {subIndex + 1}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Submit Button */}
      <View className="justify-center items-center mt-8">
        <TouchableOpacity>
          <View className="m-4 justify-center items-center bg-blue-500 p-2 rounded-lg w-44">
            <Text className="text-white text-xl">Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SampleScrollView;

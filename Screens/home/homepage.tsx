import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Pressable } from 'react-native';


const HomePage = () => {
  

  return (
    <ScrollView className="flex-grow p-4 bg-white">
      <View className="items-center mb-6">
        <Image source={require('@/assets/img/logo.png')} className="w-30 h-10" />
        <Text className="mt-2 text-lg text-gray-600">Welcome [Student Name]</Text>
      </View>
      <View className="p-4 mb-4 bg-gray-100 rounded-lg">
        <Text className="mb-2 text-lg font-semibold text-blue-700">Student Name</Text>
        <Text className="text-sm text-gray-600">List Of Individual Learning Plans</Text>
      </View>
      <View className="p-4 mb-4 bg-yellow-100 rounded-lg">
        <Text className="mb-2 text-lg font-semibold text-yellow-600">IECP</Text>
        <Text className="text-sm text-yellow-600">
          Discover Bright Spots How To Find 100 Shining Qualities in Your Child Bright Spots Are
          Glimpses Of Your Child's Hidden Talent, Skill And They Indicate Your Child's Unique
          Strength And Traits. If Education Revolves Around Their Bright Spots, Your Child Can
          Achieve Greater Success And Amazing Career Opportunities.
        </Text>
      </View>
      <View className="p-4 mb-4 bg-gray-100 rounded-lg">
        <Text className="mb-2 text-lg font-semibold text-blue-700">Update Your Daily Goal</Text>
        <Text className="mb-2 text-sm text-gray-600">How To Set, Review Daily Goals?</Text>
        <TextInput
          className="p-2 mb-2 bg-gray-200 rounded"
          placeholder="Enter Today's Smart Goal Here"
        />
        <TextInput
          className="p-2 mb-2 bg-gray-200 rounded"
          placeholder="Reflect About Your Work"
        />
        <View className="flex-row items-center mb-2 space-x-2">
          <TouchableOpacity className="flex-1 p-2 bg-gray-200 rounded">
            <Text className="text-gray-600">Choose File</Text>
          </TouchableOpacity>
          <Text className="flex-1 text-center text-gray-600">No File Chosen</Text>
        </View>
        <TouchableOpacity className="flex-row items-center justify-center p-2 mb-2 bg-blue-500 rounded-lg">
          <Text className="text-white">Submit</Text>
          <Image source={require('@/assets/icons/Arrow right.png')} className="ml-2" />
        </TouchableOpacity>
      </View>
      <View className="p-4 mb-4 bg-gray-100 rounded-lg">
        <View className="flex-row mb-2 space-x-2">
          <TouchableOpacity className="flex-1 p-2 bg-yellow-200 rounded-lg">
            <Text className="text-center text-yellow-600">Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 p-2 bg-yellow-200 rounded-lg">
            <Text className="text-center text-yellow-600">Daily Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 p-2 bg-yellow-200 rounded-lg">
            <Text className="text-center text-yellow-600">Reviews</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 p-2 bg-yellow-200 rounded-lg">
            <Text className="text-center text-yellow-600">Photos</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row mb-2 space-x-2">
          <Text className="flex-1 text-center text-gray-600">Started: May 1, 2024</Text>
          <Text className="flex-1 text-center text-gray-600">Ends: Sept 1, 2024</Text>
        </View>
        <Text className="mb-2 text-center text-yellow-600">Goals</Text>
        <Text className="p-2 mb-2 bg-blue-100 rounded text-blue-700">
          "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt
          Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation
          Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat."
        </Text>
        <Text className="mb-2 text-center text-yellow-600">How To Measure?</Text>
        <TouchableOpacity className="flex-row items-center justify-center p-2 bg-blue-500 rounded-lg">
          <Text className="text-white">Submit</Text>
          <Image source={require('@/assets/icons/Arrow right.png')} className="ml-2" />
        </TouchableOpacity>
      </View>
      <View className="p-4 mb-4 bg-gray-100 rounded-lg">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-blue-700">Observation Of Your Daily Goals</Text>
          <TouchableOpacity>
            <Image source={require('@/assets/img/plus.png')} className="w-6 h-6" />
          </TouchableOpacity>
        </View>
        <Text className="mb-2 text-sm text-gray-600">How To Set, Review Daily Goals?</Text>
        <View className="p-2 mb-2 bg-pink-100 rounded-lg">
          <Text className="text-sm text-pink-600">Related Skill</Text>
        </View>
        <View className="flex-row mb-2 space-x-2">
          <Text className="flex-1 text-center text-gray-600">Date: May 12, 2024</Text>
          <Text className="flex-1 text-center text-green-600">{'{Staff Name}'}</Text>
        </View>
        <Text className="mb-2 text-center text-gray-600">Observation Title</Text>
        <Text className="p-2 mb-2 text-center bg-gray-100 rounded text-gray-600">
          Here The Observer Can Note Down The Observation Of The Corresponding Student Daily
        </Text>
      </View>
    </ScrollView>
  );
};

export default HomePage;

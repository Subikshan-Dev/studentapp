import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView,StatusBar } from 'react-native';
import { Pressable } from 'react-native';


const HomePage = () => {
  let StudentName = "{Student Name}";

  return (
    <ScrollView className="flex-grow  bg-white">
      <StatusBar barStyle="dark-content" />
      <View className='top-6  '>
      <Image className="h-24 right-[160]  " resizeMode="center" source={require("@/assets/img/innologo.png")} />
      <Image className="absolute h-[30] left-80 top-10    " resizeMode="center" source={require("@/assets/img/Generic avatar.png")} />
      </View>
      <View className=' border-b border-gray-400 mt-4 mb-2 w-full'/>
      <View className='flex-row items-center justify-between ml-2  mt-2 w-full'>
        <Text className='text-sm font-thin text-innovat-bdgray'>Welcome {StudentName}</Text>
      </View>
      <View className='m-2  mt-6 border  border-innovat-bdgray3 h-[350] rounded-lg drop-shadow-2xl	 '>
          <Text className='text-base mt-4 ml-4 text-innovat-blue'>
          Student Name
          </Text>
          <Text className='text-sm ml-4 text-innovat-gray'>
          List of Indivdual Learning Plans
          </Text>
          <View className='absolute h-8 bg-innovat-yellow w-8 rounded-md left-4 top-20 justify-center items-center' >
            <Text className='text-xl text-white'>
          1
          </Text>
          
          </View>
          <Text className='absolute top-[82] left-14 text-innovat-yellow text-base'>
          IECP
          </Text>
          
          <Text className='mt-16 ml-4 items-center justify-center p-2.5 leading-6'>
          Discover Bright Spots
How to Find 100 Shining Qualitiesin Your Child
Bright Spots are glimpses of your child's hidden talent, skill and they indicate your child's unique strength and traits.If education revolves around their bright spots, your child can achieve greater success and amazing career opportunities.
          </Text>
      </View>
    </ScrollView>
  );
};

export default HomePage;

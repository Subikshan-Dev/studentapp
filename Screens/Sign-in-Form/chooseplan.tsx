import { View, Text, Image, TouchableOpacity,SafeAreaView } from "react-native";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import  react  from "react";
import { styles } from "@/styles/onboarding/onboard";

export default function ChooseplanScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
      return null;
  }

  return (
    <LinearGradient
        colors={["#E5ECF9", "#F6F7F9"]}
        style={{ flex: 1}}
      >
      <SafeAreaView className="Flex-1 m-3">
      <View >
          <Text >
            Hello DashBoard
          </Text>
          <Text>
            Hello DashBoard
          </Text>
          <Text>
            Hello DashBoard
          </Text>
          <Text>
            Hello DashBoard
          </Text>
        </View>
      </SafeAreaView>  
    </LinearGradient>
  );
}
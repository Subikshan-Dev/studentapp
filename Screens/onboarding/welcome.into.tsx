import { View, Text, Image } from "react-native";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { LinearGradient } from "expo-linear-gradient";
import AppIntroSlider from "react-native-app-intro-slider";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function WelcomeIntroScreen() {

  return (
    <View className="items-center justify-center m-2">
      <Text className="text-slate-800 flex">
        Try editing me! 🎉
      </Text>
      <Text className="text-slate-800 hidden">
         I'm hidden
      </Text>
      <Text className="text-slate-800 flex">
        Try editing me! 🎉
      </Text>
      <Text className="text-slate-800 hidden">
         I'm hidden
      </Text>
    </View>
  );
}
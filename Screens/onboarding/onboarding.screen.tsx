import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/styles/onboarding/onboard";
import { router } from "expo-router";
import { Orienta_400Regular } from '@expo-google-fonts/orienta'
export default function OnBoardingScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
	Orienta_400Regular
  });

  if (!fontsLoaded && !fontError) {
      return null;
  }

  return (
    <SafeAreaView className="flex-1  ">
    <LinearGradient
        colors={["#E5ECF9", "#F7F7F9"]}
        style={{ flex: 1}}
      >
    <View style={styles.firstContainer}>
      
    <Image source={require("@/assets/onboarding/Innovat_logo.png")} className="w-80 h-28 absolute top-28 " />
        <View className="top-32">
        <View className="absolute">
            <Image source={require("@/assets/onboarding/blur.png")} className="w-96 h-96 absolute top-28 -left-6 "  />
            

        </View>
          <Image source={require("@/assets/onboarding/file.png")} style={styles.logo} />
          
          
        </View>
        <View style={styles.titleWrapper} className="top-32">
          
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Start Learning With
          </Text>
          
        </View>
        <View  className="top-32">
          
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Innovat School
          </Text>
        </View>
        <View style={styles.dscpWrapper}  >
          <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
          Discover Bright Spots in your Child
          </Text>
          
        </View>
        <View style={styles.welcomeButtonStyle}>
            <TouchableOpacity onPress={() => router.push("/(routes)/onboard2")}>
            <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
        
    </View>
    </LinearGradient>
    </SafeAreaView>
  );
}
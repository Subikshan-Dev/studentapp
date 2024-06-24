import { View, Text, Image, TouchableOpacity } from "react-native";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/styles/onboarding/onboard";
import { router } from "expo-router";

export default function OnBoardingScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
      return null;
  }

  return (
    
    <View style={styles.firstContainer}>
        <View>
          <Image source={require("@/assets/onboarding/file.png")} style={styles.logo} />
          
        </View>
        <View style={styles.titleWrapper}>
          
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Start Learning With
          </Text>
          
        </View>
        <View>
          
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Innovat School
          </Text>
        </View>
        <View style={styles.dscpWrapper}>
          <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
          Discover Bright Spots in your Child
          </Text>
          
        </View>
        <View style={styles.welcomeButtonStyle}>
            <TouchableOpacity onPress={() => router.push("/(routes)/welcome-intro")}>
            <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
        
    </View>
    
  );
}
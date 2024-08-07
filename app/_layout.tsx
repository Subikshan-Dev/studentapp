import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

import { View } from "react-native";
import WelcomeIntroScreen from "./(routes)/onboarding/index";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import TabBar from "@/components/Tabs/TabBar";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/Orienta-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}
const _layout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
};
function RootLayoutNav() {
  
    const [isLoggedIn,SetisLoggedIn] = useState(false);
  return <>{isLoggedIn ? <View></View>:(
    <Stack screenOptions={{headerShown:false,}}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="(routes)/welcome-intro/index"/>
      <Stack.Screen name="(routes)/login/index"/>
      <Stack.Screen name="(routes)/forgot-password/index" />
      <Stack.Screen name="(routes)/test/index" />
      <Stack.Screen name="(routes)/onboard2/index" />
      <Stack.Screen name="(routes)/onboard3/index" />
      <Stack.Screen name="(routes)/onboard4/index" />
      <Stack.Screen name="(routes)/onboard5/index" />
      <Stack.Screen name="(routes)/sign-in-form/index" />
      <Stack.Screen name="(routes)/CreatePlan4/index" />
      <Stack.Screen name="(routes)/home/index" />
      


      </Stack>
  )}
  </>
}

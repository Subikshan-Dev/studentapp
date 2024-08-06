import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { useHeaderHeight } from "@react-navigation/elements";
export default function index() {
  return <Redirect href={"/(routes)/test"} />;
}

import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { LinearGradient } from "expo-linear-gradient";

export const styles = StyleSheet.create({
  firstContainer: {
    flex:1,
    alignItems: "center",
    marginTop: -50,
  },
  logo: {
    top:50,
    width: wp("90%"),
    height: hp("70%"),
    resizeMode: "center",
    
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleTextShape1: {
    position: "absolute",
    left: -28,
    top: -20,
  },
  titleText: {
    top:-50,
    fontSize: hp("3.8%"),
    textAlign: "center",
  },
  titleTextShape2: {
    position: "absolute",
    right: -40,
    top: -20,
  },
  titleShape3: {
    position: "absolute",
    left: 60,
  },
  dscpWrapper: {
    top:-30,
    marginTop: 8,
    
  },
  dscpText: {
    textAlign: "center",
    color: "#122758",
    fontSize: hp("2.3%"),
  },
  buttonWrapper: {
    top:10,
    backgroundColor: "#2467EC",
    width: wp("92%"),
    paddingVertical: 18,
    borderRadius: 4,
    marginTop: 50,
    
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: hp("3.5%"),
    
  },
  welcomeButtonStyle:{
    top:100,
    backgroundColor: "#2467EC",
    width:   responsiveWidth(88),
    height:   responsiveHeight(8),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    
  }
});
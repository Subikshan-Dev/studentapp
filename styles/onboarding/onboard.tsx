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
    marginTop: -70,
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
    color:'#0D66B0',
    top:-30,
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
    top:100,
    marginTop: 8,
    
  },
  dscpText: {
    textAlign: "center",
    color: "#122758",
    fontSize: hp("2.5%"),
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
    textAlignVertical:"center",
    color: "#FFFFFF",
    fontSize: hp("3%"),
    marginBottom:5,
    
  },
  welcomeButtonStyle:{
    top:150,
    backgroundColor: "#2467EC",
    width:   responsiveWidth(80),
    height:   responsiveHeight(6),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    
  }
});
import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles"
import { router } from "expo-router";

const Onboarding = () => {
  return (
    <View style={styles.onboarding3}>
      <View className=" justify-center items-center mt-24">
        <Image className="  h-40 w-40 "
        contentFit="cover"
        source={require("../assets/Logo.png")}
        />
      </View>
      <View className=" justify-center items-center mt-24">
        <Text className=" text-3xl font-medium">Let's to get started</Text>
      </View>
      <View className=" justify-center items-center mt-5">
        <Text className=" text-xl font-light">Login to get all your medical</Text>
        <Text className=" text-xl font-light">records in one place</Text>
      </View>
      <View className=" justify-center items-center  mt-24">
      <TouchableOpacity className=" bg-blue-400 w-[75%] h-14 rounded-full justify-center items-center" onPress={()=>router.push("signIn")}>
        <Text className=" text-white font-semibold text-xl">Sign in</Text>
      </TouchableOpacity>
      </View>
      <View className=" justify-center items-center mt-6">
        <TouchableOpacity className=" bg-white w-[75%] h-14 rounded-full justify-center items-center border-blue-400 border-2" onPress={()=>router.push("signUp")}>
          <Text className=" font-semibold text-xl text-blue-400">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 300,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 56,
    left: 0,
  },
  groupLayout: {
    width: 250,
    position: "absolute",
  },
  framePosition: {
    borderRadius: Border.br_13xl,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  loginPosition: {
    top: "28.57%",
    height: "42.86%",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  vectorIcon: {
    height: "69.54%",
    width: "64.13%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  cloudcare: {
    top: 113,
    fontSize: 25,
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#223a6a",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "600",
    width: 184,
    left: 58,
    position: "absolute",
  },
  vectorParent: {
    height: 151,
    width: 184,
  },
  loginToStay: {
    top: 32,
    letterSpacing: 1,
    fontFamily: FontFamily.poppinsRegular,
    color: "rgba(34, 31, 31, 0.6)",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    left: 0,
    textAlign: "center",
    width: 300,
    position: "absolute",
  },
  headline: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "700",
    color: "#221f1f",
    left: "0%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  loginToStayHealthyAndFitParent: {
    top: 176,
    width: 300,
    position: "absolute",
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: Color.colorDodgerblue,
    borderWidth: 1,
  },
  signUp: {
    width: "24%",
    left: "38%",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDodgerblue,
  },
  rectangleParent: {
    top: 72,
    height: 56,
    left: 0,
  },
  frameItem: {
    backgroundColor: Color.colorDodgerblue,
  },
  login: {
    width: "17.2%",
    left: "41.6%",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    fontWeight: "600",
    height: "42.86%",
  },
  rectangleGroup: {
    height: 56,
    left: 0,
    top: 0,
    width: 250,
  },
  frameGroup: {
    top: 274,
    left: 25,
    height: 128,
  },
  frameParent: {
    top: 199,
    left: 30,
    height: 402,
  },
  onboarding3: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding;

import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from "expo-image-picker"
import { Image } from 'expo-image'
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

const scan = () => {

  const [isModalVisible,setModalVisible]=useState(false)
  const uploadImage=async function()
  {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result=await ImagePicker.launchCameraAsync({
        cameraType:ImagePicker.CameraType.back,
        quality:1
      })
      if(!result.canceled)
      {
        setModalVisible(true)
      }
    } catch (error) {
      
    }
  }

  return (
    <View className=' justify-center items-center mt-44'>
      <Image source={require("../../assets/ScannerImage.png")}
      className=' h-48 w-48 justify-center items-center'
      contentFit='cover'/>
      <View className=' mt-40'>
        <TouchableOpacity className=' bg-blue-400  w-72 h-12 justify-center items-center rounded-lg' onPress={()=>uploadImage()}>
          <Text className=' text-xl font-light text-white'>Scan</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible} animationType='slide' presentationStyle='pageSheet'>
        <View className=' bg-gray-100 h-full items-center'>
          <TouchableOpacity className=' mt-60' onPress={()=> router.navigate("home")}>
          <AntDesign name="checkcircleo" size={250} color="green"  />
          </TouchableOpacity>
          <View className=' mt-6'>
            <Text className=' text-green-700 font-bold text-4xl text-center'>Registration</Text>
            <Text className=' text-green-700 font-bold text-4xl text-center'>Completed</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default scan
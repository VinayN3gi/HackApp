import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import auth from '../../firebaseConfig';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import upload from './upload';
import Card from '../components/Card';
const home = () => {
  const user=auth.currentUser
  const [data,setData]=useState({});


  const retriveData=async function()
  {
    let information={};
    try {
      const response= await axios.get(`http://192.168.189.97:3000/report`)
      console.log(response.data)
      information=response
    } catch (error) {
      console.log(error)
    }
    setData(information)
  }

  return (
    <SafeAreaView>
      <View className='justify-end items-end mt-2'>
        <TouchableOpacity className='mr-5' onPress={()=>router.navigate("../qrScreen")}>
        <AntDesign name="qrcode" size={50} color="black" />
        </TouchableOpacity>
      </View>
      <View className=' justify-center items-center mt-7'>
      <View className=' bg-blue-400 w-[80%] h-14 flex-row rounded-full items-center'>
        <TouchableOpacity className=' justify-center flex-1 ml-12' onPress={()=>retriveData()}>
          <Text className=' text-lg text-white'>Generate</Text>
        </TouchableOpacity>
        <TouchableOpacity className=' w-10'>
        <Ionicons name="filter" size={24} color="white" />
        </TouchableOpacity>
      </View>
      </View>
      <View className=' justify-center items-center'>
      <View className=' bg-gray-200 flex-row h-24 w-[80%]  mt-10 rounded-lg'>
          <View className=' w-[20%] justify-center items-center'>
          <AntDesign name="file1" size={40} color="gray" />
          </View>
          <View className=' flex-1 justify-center ml-2'>
          <Text className=' text-lg'>Date : 07/10/2004</Text>
          </View>          
        </View>
      </View>
    </SafeAreaView>
  )
}

export default home
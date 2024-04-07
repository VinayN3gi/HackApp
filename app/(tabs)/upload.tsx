import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { router } from 'expo-router'
const upload = () => {


  const [pId,setP]=useState("");
  const [hId,setH]=useState("");
  const [date,setDate]=useState("");
  const [password,setPass]=useState("")

  const data={
    hospitalIds:hId,
    date:date,
  }
  const upload=async function()
  {
    try {
      const response= await axios.post("http://192.168.189.97:3000/report",data);
      console.log(response.data)
      router.replace("(tabs)/home")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <KeyboardAvoidingView className=' justify-center items-center'>
      <View className=' bg-gray-200 h-16 w-[80%]  mt-24 rounded-lg justify-center items-start'>
        <TextInput placeholder='Patient Id' className='ml-3 font-light text-xl' onChangeText={(text)=>setP(text)} value={pId}/>
      </View>
      <View className=' bg-gray-200 h-16 w-[80%]  mt-10 rounded-lg justify-center items-start'>
        <TextInput placeholder='Hospital Id' className='ml-3 font-light text-xl' onChangeText={(text)=>setH(text)} value={hId}/>
      </View>
      <View className=' bg-gray-200 h-16 w-[80%]  mt-10 rounded-lg justify-center items-start'>
        <TextInput placeholder='Date' className='ml-3 font-light text-xl' onChangeText={(text)=>setDate(text)} value={date}/>
      </View>
      <View className=' bg-gray-200 h-16 w-[80%]  mt-10 rounded-lg justify-center items-start'>
        <TextInput placeholder='Password' className='ml-3 font-light text-xl' onChangeText={(text)=>setPass(text)} value={password}/>
      </View>
      <TouchableOpacity className=" bg-blue-400 w-[75%] h-14 rounded-full justify-center items-center mt-10" onPress={()=>upload()}>
        <Text className=" text-white font-semibold text-xl">Upload</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default upload
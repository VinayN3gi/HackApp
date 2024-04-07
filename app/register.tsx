import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import auth from '../firebaseConfig';
import { router } from 'expo-router';

const register = () => {
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [bGroup,setbGroup]=useState("");
  const [height,setHeight]=useState('')
  const [DOB,setDOB]=useState("");
  const [weight,setWeight]=useState("");
  const [number,setNumber]=useState("");
  const [emNumber,setEmNumber]=useState("");
  const [password,setPass]=useState("")
  const user:any=auth.currentUser


  const data={
    name:name,
    age:age,
    contactNo:number,
    emergencyContactNo:emNumber,
    bloodGroup:bGroup,
    dateOfBirth:DOB,
    height:height,
    weight:weight,
    password:password,
    uid:user.uid,
  }

  const fetchApi=async function()
  {
    try {
      const response= await axios.post("http://192.168.189.97:3000/register",data);
      console.log(response.data)
      router.replace("(tabs)/home")
    } catch (error) {
      console.log(error)
    }
  }

  return (
   <KeyboardAvoidingView behavior='padding' className=' h-full'>
    <View className=' justify-center items-center mt-8'>
      <Text className=' font-semibold text-3xl text-blue-400' >Details</Text>
    </View>
    <View className=' justify-center items-center mt-6 mb-3'>
      <View className='w-[80%]  h-12 justify-center rounded-lg border-gray-300 border'>
        <TextInput placeholder='Name ' className=' ml-3 text-lg' onChangeText={(text)=>setName(text)} value={name}/>
      </View>
    </View>
    <View className=' justify-center items-center mt-3 mb-3'>
      <View className='w-[80%]  h-12 justify-center rounded-lg border-gray-300 border'>
        <TextInput placeholder='Age' className=' ml-3 text-lg' onChangeText={(text)=>setAge(text)} value={age}/>
      </View>
    </View>
    <View className=' justify-center items-center mt-3 mb-3'>
      <View className='w-[80%]  h-12 justify-center rounded-lg border-gray-300 border'>
        <TextInput placeholder='Blood Broup' className=' ml-3 text-lg' value={bGroup} onChangeText={(text)=>setbGroup(text)}/>
      </View>
    </View>
    <View className=' justify-center items-center mt-3 mb-3'>
      <View className='w-[80%]  h-12 justify-center rounded-lg border-gray-300 border'>
        <TextInput placeholder='Height' className=' ml-3 text-lg' value={height} onChangeText={(text)=>setHeight(text)}/>
      </View>
    </View>
    <View className=' justify-center items-center mt-3 mb-3'>
      <View className='w-[80%]  h-12 justify-center rounded-lg border-gray-300 border'>
        <TextInput placeholder='Date of Birth' className=' ml-3 text-lg' value={DOB} onChangeText={(text)=>setDOB(text)}/>
      </View>
    </View>
    <View className=' justify-center items-center mt-3 mb-3'>
      <View className='w-[80%]  h-12 justify-center rounded-lg border-gray-300 border'>
        <TextInput placeholder='Weight' className=' ml-3 text-lg' value={weight} onChangeText={(text)=>setWeight(text)}/>
      </View>
    </View>
    <View className=' justify-center items-center mt-3 mb-3'>
      <View className='w-[80%]  h-12 justify-center rounded-lg border-gray-300 border'>
        <TextInput placeholder='Contact No.' className=' ml-3 text-lg' value={number} onChangeText={(text)=>setNumber(text)}/>
      </View>
    </View>
    <View className=' justify-center items-center mt-3 mb-3'>
      <View className='w-[80%]  h-12 justify-center rounded-lg border-gray-300 border'>
        <TextInput placeholder='Emergency Contact No.' className=' ml-3 text-lg' value={emNumber} onChangeText={(text)=>setEmNumber(text)}/>
      </View>
    </View>
    <View className=' justify-center items-center mt-3 mb-3'>
      <View className='w-[80%]  h-12 justify-center rounded-lg border-gray-300 border'>
        <TextInput placeholder='Password' className=' ml-3 text-lg' value={password} onChangeText={(text)=>setPass(text)} secureTextEntry/>
      </View>
    </View>
    <View className=" justify-center items-center w-full mt-2">
        <TouchableOpacity className=" bg-blue-400 w-[75%] h-14 rounded-full justify-center items-center" onPress={()=>fetchApi()}>
        <Text className=" text-white font-semibold text-xl">Sign in</Text>
        </TouchableOpacity>
      </View>
   </KeyboardAvoidingView>
  )
}

export default register
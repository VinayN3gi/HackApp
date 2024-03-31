import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import url from "../variables"
import axios from 'axios'
import { router } from 'expo-router'
import auth from '../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'


const index = () => {
  const [email,setEmail]=useState<string>("")
  const [password,setPassword]=useState<string>("")


  const logIn=function() {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    router.push("(tabs)/home")
  })
  .catch((error:any) => {
    console.log(error)
  });

  }

  return (
    <View  className=' bg-white h-full'>
      <View className=' justify-center items-center p-0'>
      <Image source={{uri:url}}
       className='  h-28 w-28 mt-40'/>
      </View>
      <Text className=' text-4xl font-bold mt-8 mb-6 ml-6'>Sign in to X</Text>
      <View className=' justify-center items-center'>
      <View className=' bg-white w-80 h-12 border rounded-md mb-6'>
        <TextInput placeholder='Enter email' className=' text-xl p-1 text-gray-600'
          onChangeText={(text)=>setEmail(text)}/>
      </View>
      <View className=' bg-white w-80 h-12 border rounded-md'>
        <TextInput placeholder='Enter password...' className=' text-xl p-1 text-gray-600'
          onChangeText={(text)=>setPassword(text)} />
      </View>
      </View>
      <View className=' justify-center items-center mt-10 '>
        <TouchableOpacity className=' bg-black w-80 h-14 rounded-full justify-center items-center' onPress={()=>logIn()}>
          <Text className=' text-white text-xl'>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View className=' flex-row justify-center items-center mt-10'>
        <Text className=' text-lg'>Dont't have an account? </Text>
        <TouchableOpacity onPress={()=>router.push("signIn")}>
        <Text className=' text-lg text-blue-500 underline'>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default index
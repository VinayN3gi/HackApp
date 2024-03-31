import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import url from '../variables'
import axios from 'axios'
import { router } from 'expo-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../firebaseConfig'



const signIn = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const postData=async function()
  {
    const data={
      email:email,
      password:password
    }
    try {
      const response = await axios.post("http://10.18.3.88:3000/register",data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const signIn=function()
  {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      postData();
      router.push("(tabs)/home")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
  });

  }



    return (
    <View className=' bg-white h-full'>
      <View className=' justify-center items-center p-0'>
      <Image source={{uri:url}}
       className='h-28 w-28 mt-40'/>
      </View>
      <Text className=' text-2xl font-bold mt-8 mb-6 ml-6'>Create your account now </Text>
      <View className=' justify-center items-center'>
      <View className=' bg-white w-80 h-12 border rounded-md mb-6'>
        <TextInput placeholder='Enter email' className=' text-xl p-1 text-gray-600'
          onChangeText={(text)=>setEmail(text)} value={email}/>
      </View>
      </View>
      <View className=' justify-center items-center'>
      <View className=' bg-white w-80 h-12 border rounded-md mb-6'>
        <TextInput placeholder='Enter password' className=' text-xl p-1 text-gray-600'
          onChangeText={(text)=>setPassword(text)} value={password}/>
      </View>
      </View>
      <View className=' justify-center items-center mt-10 '>
        <TouchableOpacity className=' bg-black w-80 h-14 rounded-full justify-center items-center' onPress={()=>signIn()}>
          <Text className=' text-white text-xl'>Sign In</Text>
        </TouchableOpacity>
      </View>
      

    </View>
  )
}
    
export default signIn
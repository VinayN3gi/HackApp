import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import url from "../variables"
import axios from 'axios'



const index = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")


  const handleSubmit= async function()
  {
    const data={
      email:email,
      password:password
    }
    try {
      const response=await axios.post("http://10.18.3.88:3000/register",data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <View >
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
        <TouchableOpacity className=' bg-black w-80 h-14 rounded-full justify-center items-center' onPress={()=>handleSubmit()}>
          <Text className=' text-white text-xl'>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View className=' flex-row justify-center items-center mt-10'>
        <Text className=' text-lg'>Dont't have an account? </Text>
        <TouchableOpacity>
        <Text className=' text-lg text-blue-500 underline'>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default index
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebaseConfig';

const signUp = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [name,setName]=useState("");

  const signUp =function()
  {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('Success');
    router.replace("register");
  })
  .catch((error:any) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
  });
  }


  return (
    <KeyboardAvoidingView behavior='padding' className=' h-full bg-white  items-center' keyboardVerticalOffset={500}>
      <View className=" justify-center items-center mt-24">
        <Image className="  h-40 w-40 "
        contentFit="cover"
        source={require("../assets/Logo.png")}
        />
      </View>
      <View className=' bg-gray-100 flex-row  h-16 w-[80%]  mt-20 rounded-lg'>
          <View className=' w-[20%] justify-center items-center'>
          <AntDesign name="user" size={28} color="black" />
          </View>
          <View className=' flex-1 justify-center ml-2'>
          <TextInput placeholder='Enter your name' className=' font-light text-xl text-gray-400'
            onChangeText={(text)=>setName(text)}
            value={name}/> 
          </View>          
        </View>
        <View className=' bg-gray-100 flex-row  h-16 w-[80%]  mt-10 rounded-lg'>
          <View className=' w-[20%] justify-center items-center'>
          <Feather name="mail" size={26} color="gray" /> 
          </View>
          <View className=' flex-1 justify-center ml-2'>
          <TextInput placeholder='Enter your email' className=' font-light text-xl text-gray-400'
            onChangeText={(text)=>setEmail(text)}
            value={email}/> 
          </View>          
        </View>
        <View className=' bg-gray-100 flex-row  h-16 w-[80%]  mt-10 rounded-lg'>
          <View className=' w-[20%] justify-center items-center'>
          <AntDesign name="lock" size={28} color="gray" />
          </View>
          <View className=' flex-1 justify-center ml-2'>
          <TextInput placeholder='Enter your password' className=' font-light text-xl text-gray-400' secureTextEntry
            onChangeText={(text)=>setPassword(text)}
            value={password}/> 
          </View>          
        </View>
        <View className=" justify-center items-center w-full mt-20">
        <TouchableOpacity className=" bg-blue-400 w-[75%] h-14 rounded-full justify-center items-center" onPress={()=>signUp()}>
        <Text className=" text-white font-semibold text-xl">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default signUp
import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { Image } from 'expo-image'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebaseConfig';
import { router } from 'expo-router';


const signIn = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("");

  const signIn=function()
  {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      router.push("./(tabs)/home")
      console.log('Success')
  })
  .catch((error:any) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error)
  });

  }

  return (
    <KeyboardAvoidingView className=' h-full bg-white' behavior='padding' keyboardVerticalOffset={350}>
      <View>
      <View className=" justify-center items-center mt-24">
        <Image className="  h-40 w-40 "
        contentFit="cover"
        source={require("../assets/Logo.png")}
        />
        <View className=' bg-gray-100 flex-row  h-16 w-[80%]  mt-20 rounded-lg'>
          <View className=' w-[20%] justify-center items-center'>
          <Feather name="mail" size={26} color="gray" /> 
          </View>
          <View className=' flex-1 justify-center ml-2'>
          <TextInput placeholder='Enter your email' className=' font-light text-xl text-gray-400'
            onChangeText={(text)=>setEmail(text)}
            value={email}/> 
          </View>          
        </View>
        <View className=' bg-gray-100 flex-row h-16 w-[80%]  mt-10 rounded-lg'>
          <View className=' w-[20%] justify-center items-center'>
          <AntDesign name="lock" size={28} color="gray" />
          </View>
          <View className=' flex-1 justify-center ml-2'>
          <TextInput placeholder='Enter your password' className=' font-light text-xl text-gray-400'
          onChangeText={(text)=>setPassword(text)} value={password} secureTextEntry
          /> 
          </View>          
        </View>
        <View className=" justify-center items-center w-full mt-20">
        <TouchableOpacity className=" bg-blue-400 w-[75%] h-14 rounded-full justify-center items-center" onPress={()=>signIn()}>
        <Text className=" text-white font-semibold text-xl">Sign in</Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>
      <View className=' flex-row  justify-center items-center mt-2' style={{position:"absolute", marginTop:700,marginLeft:60}}>
        <View>
          <Text className=' text-lg font-light'>Don't have an account ?</Text>
        </View>
        <TouchableOpacity>
          <Text className=' text-lg font-light text-blue-400' onPress={()=>router.push("signUp")}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default signIn
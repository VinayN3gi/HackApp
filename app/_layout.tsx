import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


export const unstable_setting={
  initialRouteName:"(tabs)"
}

const Rootlayout = () => {
  return (
    <Stack>
        <Stack.Screen name="register" options={{headerShown:false}}/>
        <Stack.Screen name="signUp" options={{headerShown:false}}/>
        <Stack.Screen name="signIn" options={{headerShown:false}}/>
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
    </Stack>
  )
}

export default Rootlayout
import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Rootlayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="signIn" options={{headerShown:false}}/>
    </Stack>
  )
}

export default Rootlayout
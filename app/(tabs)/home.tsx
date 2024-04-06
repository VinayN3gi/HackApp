import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import auth from '../../firebaseConfig';

const home = () => {
  const user:any=auth.currentUser
  return (
    <SafeAreaView>
      <View className='justify-end items-end mt-2'>
        <TouchableOpacity className='mr-5' onPress={()=>router.navigate("../qrScreen")}>
        <AntDesign name="qrcode" size={50} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default home
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'
import auth from '../firebaseConfig'
import SvgQRCode from 'react-native-qrcode-svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons';

const qrScreen = () => {

    const user=auth.currentUser
    const userid=user.uid
    const [data,setData]=useState({})
    const retrieveData=async function()
    {
        try {
            const response=await axios.get(`http://192.168.189.97:3000/info`)
            let userInfo={};
            for(const [key,value] of Object.entries(response.data))
                {
                    const {uid}=value
                    if(uid===userid)
                        {
                            userInfo={name:value.name,uid:value.uid,age:value.age,bloodGroup:value.bloodGroup,dateOfBirth:value.dateOfBirth,emergencyContactNo:value.emergencyContactNo,height:value.height,weight:value.weight,contactNo:value.contactNo}
                        }
                }
                setData(userInfo)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        retrieveData()
    },[])

  return (
    <SafeAreaView className=' justify-center items-center'>
        <View className=' mt-20'>
            <Text className=' font-light text-3xl'>Name : {data.name}</Text>
        </View>
        <View className=' mt-4'>
            <Text className=' font-light text-3xl'>Birth Date :{data.dateOfBirth}</Text>
        </View>
        <View className=' mt-4'>
            <Text className=' font-light text-3xl'>Blood Group:{data.bloodGroup}</Text>
        </View>
        <View className=' mt-4'>
            <Text className=' font-light text-2xl'>Emergency Contact No:{data.emergencyContactNo}</Text>
        </View>
        <View className=' mt-20'>
            <SvgQRCode value="Registration Complete" size={200}/>
        </View>
        <View className=' mt-4'>
            <Text className=' font-light font-md'>Patient Id:{data.uid}</Text>
        </View>
    </SafeAreaView>
  )
}

export default qrScreen
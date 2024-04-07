import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const TabLayout = () => {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:"blue"}}>
      <Tabs.Screen name="home" options={{
        headerShown:false,
        title:"Home",
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
      }}/>
      <Tabs.Screen name="upload"
      options={{
        title:"Upload",
        headerShown:false,
        tabBarIcon:({color})=><AntDesign name="upload" size={24} color="black" />
      }} />
      <Tabs.Screen name="scan"
      options={{
        title: 'Scan',
        headerShown:false,
        tabBarIcon: ({ color }) => <AntDesign name="scan1" size={24} color="black" />
      }}/>
    </Tabs>
  )
}

export default TabLayout
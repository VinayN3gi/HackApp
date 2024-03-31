
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons';
const TabLayout = () => {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:"black"}}>
        <Tabs.Screen name="home" options={{
          headerShown:false,
          title:"Home",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}/>
        <Tabs.Screen name="add"
        options={{
          title:"Post",
          headerShown:false,
          tabBarIcon:({color})=><FontAwesome6 name="add" size={28} color={color} />
        }} />
        <Tabs.Screen name="search"
        options={{
          title: 'Search',
          headerShown:false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
        }}/>
    </Tabs>
  )
}

export default TabLayout
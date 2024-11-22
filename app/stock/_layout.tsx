import { Link, Stack } from 'expo-router'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Pressable } from 'react-native';

const Layout = () => {
  return (
   <Stack>
        <Stack.Screen name='index' options={{title:"Stocking",
            headerRight:()=>
            <Link href={"/stock/record"} asChild >
                <Pressable hitSlop={20}>
                <EvilIcons name="refresh" size={24} color="black" />
                </Pressable>
            </Link>
        }} />
 
        <Stack.Screen name='record' options={{title:"Record Listing App"}} />
   </Stack>
  )
}

export default Layout
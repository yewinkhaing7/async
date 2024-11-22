// import { Stack } from 'expo-router'
// import React from 'react'

// const Layout = () => {
//   return (
//     <Stack>
//         <Stack.Screen name='index' options={{title:"Home"}} />
//         <Stack.Screen name='stock' options={{title:"In Stock App"}} />
//         <Stack.Screen name='creation' options={{title:"Create App"}} />
//     </Stack>
//   )
// }

// export default Layout

import { Tabs } from 'expo-router'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const Layout = () => {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:"black",tabBarActiveBackgroundColor:"green"}}>
        <Tabs.Screen name='index' options={{title:"Home",
            tabBarIcon:({color,size})=> <AntDesign name="home" size={size} color={color} />
        }} />
        
        <Tabs.Screen name='stock' options={{title:"In Stock App", headerShown:false,
      
            tabBarIcon:({color,size})=><Feather name="list" size={size} color={color} />
        }} />


        <Tabs.Screen name='creation' options={{title:"Create App",
            tabBarIcon:({color,size})=><AntDesign name="addfolder" size={size} color={color} />
        }} />
    </Tabs>
  )
}

export default Layout
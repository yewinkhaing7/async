import { useRouter } from 'expo-router'
import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'

const Stock = () => {

    const router=useRouter();

    const goToCreate=()=>{
        console.log("You Clicked Creation");
        router.navigate("/creation");
    }

  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Stock List</Text>
        <TouchableOpacity onPress={goToCreate}>
            <Text>Go to Creation</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Stock

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    textStyle:{
        fontSize:23,
    }

})
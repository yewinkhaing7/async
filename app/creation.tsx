import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const Creation = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Creation</Text>
    </View>
  )
}

export default Creation

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",

  } ,
  textStyle:{
    fontSize:25,
  } 
})
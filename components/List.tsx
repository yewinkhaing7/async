import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { theme } from '../theme';

type listPros={
    id:string;
    message:string;
    isDone:boolean;
    changeStatus:(id:string)=>void;
    undoStatus:(id:string)=>void;
}

const List = ({id,message,isDone,changeStatus,undoStatus}:listPros) => {
  return (
    <View style={[
        styles.container,
        
            isDone? {backgroundColor:theme.bgColor}:undefined, 
        
    ]}>
        <Text style={[
            styles.textList,
            {
                color:isDone ? "gray" :undefined,
                textDecorationLine: isDone ? "line-through":undefined,
            }
        ]}>{message}</Text>
        
        {
            isDone ? <AntDesign 
            name="check" 
            size={24} 
            color="blue" 
            
            style={{opacity:0.5}}

            onPress={()=>undoStatus(id)}

            /> : <AntDesign 
            name="close" 
            size={24} 
            color="red" 
            
            onPress={()=>changeStatus(id)}
            />
        }
    </View>
  )
}

export default List

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        borderBottomWidth:1,
        borderBottomColor:"green",
        paddingBottom:10,
    },
    textList:{
        fontSize:19,
    }

})
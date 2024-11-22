
import { Alert, FlatList, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import List from '../components/List';
import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { getData, storeData } from '../utils/storage';
const KEY="mtd-app";

type listType={
  id:string,
  message:string,
  isDone:boolean,
}

// const staticList:listType[]=[
//   {
//     id:"1",
//     message:"Get Up",
//     isDone:false,
//   },
//   {
//     id:"2",
//     message:"Have Breakfast",
//     isDone:false,
//   },
//   {
//     id:"3",
//     message:"Go Work",
//     isDone:true,
//   }
// ]

export default function App() {
 

  // const [todos,setTodos]=useState<listType[]>(staticList);
  const [todos,setTodos]=useState<listType[]>([]);

  const changeStatus=async (id:string)=>{

    setTodos(prevState=>prevState.map((td)=>(td.id===id? {...td,isDone: !td.isDone}:td )));
    await storeData(todos);
  };

  const undoStatus=(id:string)=>{
   Alert.alert("Hey","Are you sure to undo?",[
    {
      text:"cancel",
      onPress:()=>{},
      style:"cancel",
    },
    {
      text:"yes",
      onPress:async()=>{
        setTodos((prevState)=>prevState.map((td)=>td.id===id? {...td,isDone : false}:td
      
      )
      
    );
    await storeData(todos);
       
      },
      
    },

   ]);
  };

  const [inputVal,setInputVal]=useState<string>("");

  const goText=async()=>{
    const addText=[
     ...todos,{id:String(todos.length+1),message:inputVal,isDone:false},
    ];

    setTodos(addText);
    await storeData(addText);
    setInputVal("");
  };

useEffect(()=>{
  const getTodoData=async()=>{

    const todoData=await getData(KEY);
    setTodos(todoData);

  };
  
  getTodoData();

},[]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.titleText}>RN TODOS</Text> */}

      {/* <Link href={"/stock"}>MTD Online Class</Link> */}

     

     <View style={styles.textList}>
     {/* {
        todos.map((td)=>(
          <List key={td.id} {...td} changeStatus={changeStatus} undoStatus={undoStatus} />
        ))
      } */}

      <FlatList
      ListEmptyComponent={
        <View>
            <Text style={{color:"lightgray",fontSize:24, flex:1, alignItems:"center",justifyContent:"center"}} >Thre is no content</Text>
        </View>
      }
      data={todos} renderItem={({item})=> 
      <List changeStatus={changeStatus} undoStatus={undoStatus} {...item} />
      } />



     </View>

     <View style={{width:"100%",paddingHorizontal:15}} >
        <TextInput placeholder='Please type working data' onChangeText={(val)=>setInputVal(val)} 
        
        onSubmitEditing={goText}

        style={styles.textBorder}

        value={inputVal}

        />
      </View>

     <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titleText:{
    fontSize:22,
  },
  textList:{
    flex:1,
    marginHorizontal:15,
    gap:10,
    marginTop:15,
  },
  textBorder:{
    borderWidth:1,
    borderRadius:6,
    borderColor:"lightgray",
    marginTop:6,
    width:"100%",
    alignItems:"center",
    paddingTop:30,
    paddingBottom:30,
    textAlign:"center",
    marginBottom:6,
    
  }
});

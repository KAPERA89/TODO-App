import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, Button, View} from 'react-native';

export default function AddTodo({submitHandler}) {

    const [Text, setText] = useState('')

    const changeText = (val) => {
        setText(val)
    }

  return (
    <View>
        <TextInput 
        style = {styles.input}
        placeholder='new Todo....'
        onChangeText={changeText}
        />

        <Button onPress={() => submitHandler(Text)} title='Add Todo' color='coral'/>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        margin:40,
        marginBottom:20,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd' 
    },
})

 
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from './Component/Header';
import TodoItem from './Component/todoItem';
import AddTodo from './Component/addTodo';

export default function App() {

  //const [people, setPeople] = useState([
  //   {name : 'Othmane', id: '1'},
  //   {name : 'Darhoni', id: '2'},
  //   {name : 'Leo', id: '3'},
  //   {name : 'Messi', id: '4'},
  //   {name : 'Kapera', id: '5'},
  //   {name : 'Rodrigo', id: '6'},
  //   {name : 'De paul', id: '7'},
  // ])

  // const presshandler = (id) => {
  //     console.log(id);
  //     setPeople((prevPeople) => {
  //         return prevPeople.filter(item => item.id != id)
  //     })
  // } 


  const [todo, setTodo] = useState([
    {key: 1, text: 'Read manhwa' },
    {key: 2, text: 'learn spring Boot'},
    {key: 3, text: 'watch a Movie'}
  ]);

  const pressHandler = (key) => {
     setTodo((prevTodos) =>{
        return prevTodos.filter(x => x.key != key)
     })
  }

  const submitHandler = (text) => {
    setTodo( (prevTodos) =>{
      return [
        {text: text , key:Math.random()},
        ...prevTodos
      ]
    })
  }
    
  return (
    <View style={styles.container}>
      <Header />

      <AddTodo submitHandler={submitHandler}/>

      <View style={styles.content}>
          <View style={styles.list}>
            <FlatList 
            data={todo}
            renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
            )}
            />
          </View>
      </View>


      {/* <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => presshandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      /> */}

      {/* <ScrollView>
        {people.map((item) => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingTop:40,
    //paddingHorizontal:20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  // item:{
  //     backgroundColor:'pink',
  //     padding:30,
  //     marginTop:24,
  //     fontSize:24,
  //     marginHorizontal:10
  // },
  content:{
    padding:40
  },
  list:{
    marginTop:20,
  }
});

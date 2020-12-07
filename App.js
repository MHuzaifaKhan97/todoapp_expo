import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

let id = 0;
const App = () => {

  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([{ text: 'Learn React', id: ++id }]);

  const addTodo = () => {
    if (todoText) {
      setTodos([
        ...todos,
        { text: todoText, id: ++id },
      ])
      setTodoText("");
    }
  }
  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos)
  }
  const updateTodo = (toDo) => {
    setTodoText(toDo.text)
    let newTodos = todos.filter((todo) => todo.id !== toDo.id);
    setTodos(newTodos)
  }
  return (
    <ImageBackground source={{ uri: './assets/bg.jpg' }} style={styles.container}>
      {/* <View style={styles.container}> */}
      <View style={styles.header}>
        <Text style={styles.heaederText}>All Tasks</Text>
      </View>

      <View style={styles.body}>
        <FlatList
          data={todos}
          style={{ width: '100%' }}
          renderItem={(data) => {
            return (
              <View style={styles.card}>
                <View style={styles.cardInner}>
                  <View style={{ flex: 5 }}>
                    <Text style={styles.cardText}> {data.item.text}</Text>
                  </View>
                  <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>

                    <TouchableOpacity onPress={() => updateTodo(data.item)}>
                      <AntDesign style={styles.btnsText} name="edit" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => deleteTodo(data.item.id)}>
                      <AntDesign style={styles.btnsText} name="delete" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          }}
          keyExtractor={(todo) => todo.id}
        />
        {/* {
          todos.map((todo) => {
            return (
              <View style={styles.card} key={todo.id}>
                <View style={styles.cardInner}>
                  <View style={{ flex: 5 }}>
                    <Text style={styles.cardText}> {todo.text}</Text>
                  </View>
                  <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>

                    <TouchableOpacity onPress={() => updateTodo(todo)}>
                      <AntDesign style={styles.btnsText} name="edit" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                      <AntDesign style={styles.btnsText} name="delete" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

            )
          })
        } */}

      </View>

      <View style={styles.bottom}>
        <TextInput value={todoText} onChangeText={(text) => setTodoText(text)} style={styles.input} placeholder=" Enter Something..." />
        <TouchableOpacity onPress={() => addTodo()} style={styles.btnSubmit}>
          <AntDesign name="plus" style={styles.btnText} size={24} color="#0097f5" />
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </ImageBackground>

  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
    // backgroundColor: '#fff',
    // backgroundColor:'#f5f0f0'
  },
  header: {
    width: '100%',
    flex: 2,
    backgroundColor: '#0097f5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heaederText: {
    fontSize: 34,
    marginTop: 30,
    fontWeight: '700',
    color: '#fff'
  },
  body: {
    width: '100%',
    flex: 8,
    // backgroundColor: 'orange',
    alignItems: 'center',
    paddingTop: 10,
  },
  card: {
    width: '95%',
    marginTop: 10,
    height: 70,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  cardInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  }
  ,
  cardText: {
    marginLeft: 20,
    fontWeight: '700',
    fontSize: 20,
    color: '#0097f5'
  },
  bottom: {
    width: '100%',
    flex: 1.5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#d5e3e6'
  },
  input: {
    flex: 12,
    borderWidth: 3,
    borderColor: '#b5bec4',
    height: 50,
    borderRadius: 100,
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10,
    marginLeft: 5,
    backgroundColor: '#fff'
  },
  btnSubmit: {
    flex: 2,
    alignItems: 'center'
  },
  btnsText: {
    backgroundColor: '#0097f5',
    borderRadius: 100,
    color: '#fff',
    padding: 10,
    marginTop: -8
  },
  btnText: {
    // color: 'b',
    backgroundColor: '#0097f5',
    borderRadius: 100,
    color: '#fff',
    padding: 10,
  }
});

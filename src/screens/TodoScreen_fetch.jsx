// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import TodoForm from '../components/TodoForm';
// import TodoList from '../components/TodoList';
// import todoService from '../services/todoService';
//
// export default function TodoScreen() {
//   const [todos, setTodos] = useState([]);
//
//   useEffect(() => {
//     const fetchTodos = async () => {
//         try {
//             const response = await todoService.getTodos();
//             setTodos(response);
//         }  catch (error) {
//             console.log("error", error)
//         }
//     };
//     fetchTodos();
//   }, []);
//
//   const addTodo = async (text) => {
//     const answer = await todoService.addTodo(text);
//     setTodos([...todos, answer]);
//   };
//
//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };
//
//   return (
//     <View style={styles.container}>
//       <TodoForm onAddTodo={addTodo} />
//       <TodoList todos={todos} onDeleteTodo={deleteTodo} />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
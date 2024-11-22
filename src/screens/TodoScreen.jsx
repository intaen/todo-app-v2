import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, fetchTodos } from '../redux/slices/todoSlice';

export default function TodoScreen() {
    const dispatch = useDispatch();
    const {items: todos} = useSelector((state) => state.todos);

  useEffect(() => {
      dispatch(fetchTodos());
  }, []);


  const addTodo = async (text) => {
    dispatch(addTodo(text));
  };

  return (
    <View style={styles.container}>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
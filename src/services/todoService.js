import axios from 'axios';

const API_URL = "https://dummyjson.com/todos"

const getTodos = async () => {
    try {
        const data = await axios.get(API_URL);
        return data.data.todos.slice(0, 10);
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};

const addTodo = async (text) => {
    try {
        const data = await axios.post(API_URL+"/add", {
            todo: text,
            completed: false,
            id: 0,
        });
        return data.data;
    } catch (error) {
        console.error('Error adding todo:', error);
        throw error;
    }
};

export default {
    getTodos,
    addTodo,
};
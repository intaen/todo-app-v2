import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import todoService from '../../services/todoService';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    return await todoService.getTodos();
})

export const addTodo = createAsyncThunk('todos/addTodo', async (text) => {
    return await todoService.addTodo(text);
})

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTodos.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false;
            state.error = "Failed to fetch data";
        })
        .addCase(addTodo.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
    }
});

export default todoSlice.reducer;
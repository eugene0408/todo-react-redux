import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        curCategory: 'all',
        filteredTodos: [],
        status: null,
        error: null
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
              id: new Date().toISOString(),
              title: action.payload.title,
              text: action.payload.text,
              completed: false,
              isOpen: false
            });
        },
        toggleComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        toggleExpand(state, action){
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.isOpen = !toggledTodo.isOpen
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        changeCategory(state, action){
            state.curCategory = action.payload.value;  
        },
        filterTodos(state, action){
            switch(state.curCategory){
                case 'completed':
                    state.filteredTodos = state.todos.filter(todo => todo.completed === true);
                    break;
                case 'uncompleted':
                    state.filteredTodos = state.todos.filter(todo => todo.completed === false);
                    break;
                default: 
                    state.filteredTodos = state.todos;
            }
        }
    }
});

export const {
    addTodo, 
    toggleComplete, 
    toggleExpand, 
    removeTodo,
    changeCategory,
    filterTodos
} = todoSlice.actions;

export default todoSlice.reducer;
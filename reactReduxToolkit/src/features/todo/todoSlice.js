import {createSlice, nanoid} from '@reduxjs/toolit'

const initialState = {
    todos: [{id: 1, text: "hello"}]
}

const todoSlice = createSlice({
    name: todo,
    initialState,
    reducers: {
        addTodo:(state, actions) => {
            const todo = {
                id:nanoid(),
                text: actions.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, actions) => {
            state.todos.filter((todo) => todo.id !== actions.payload)
        }
    }

})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
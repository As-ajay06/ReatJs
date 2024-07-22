import {configureStore} from '@reactjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer : todoReducer
})
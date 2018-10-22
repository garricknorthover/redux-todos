import { SET_NAME, SET_SURNAME, ADD_TODO, DELETE_TODO } from './actionTypes'

export const setName = (name) => ({
  type: SET_NAME,
  name  
})
export const setSurname = (surname) => ({
  type: SET_SURNAME,
  surname  
})
export const addTodo = (name, surname, date) => ({
  type: ADD_TODO,
  name,
  surname,
  date
})
 export const deleteTodo = (date) => ({
   type: DELETE_TODO,
   date
 })
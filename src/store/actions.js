import { SET_NAME, SET_SURNAME, ADDTODO } from './actionTypes'

export const setName = (name) => ({
  type: SET_NAME,
  name  
})
export const setSurname = (surname) => ({
  type: SET_SURNAME,
  surname  
})
export const addTodo = (name, surname, date) => ({
  type: ADDTODO,
  name,
  surname,
  date
})
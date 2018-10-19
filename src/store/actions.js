import { CHANGE_FORM_TEXT, ADDTODO } from './actionTypes'

export const changeFormText = text => ({
  type: CHANGE_FORM_TEXT,
  text
})
export const addTodo = (text, date) => ({
  type: ADDTODO,
  text,
  date
})
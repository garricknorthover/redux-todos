import { CHANGE_FORM_TEXT, ADDTODO } from './actionTypes'

export const changeFormText = (fname, secname) => ({
  type: CHANGE_FORM_TEXT,
  fname,
  secname
})
export const addTodo = (text, date) => ({
  type: ADDTODO,
  text,
  date
})
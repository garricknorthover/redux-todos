import { ONCHANGEFORM, ADDTODO } from './actionTypes'

export const onChangeForm = text => ({
  type: ONCHANGEFORM,
  text
})
export const addTodo = (text, id) => ({
  type: ADDTODO,
  text,
  id
})
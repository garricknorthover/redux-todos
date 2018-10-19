import { ONCHANGEFORM, ADDTODO } from './actionTypes'

export const onChangeForm = text => ({
  type: ONCHANGEFORM,
  text
})
export const addTodo = text => ({
  type: ADDTODO,
  text
})
import { ONCHANGEFORM, ADDTODO } from './actionTypes'

export default function reducer (
  state = {
    todos: [],
    formInput: ''
  },
  action
) {
  switch (action && action.type) {
    case ONCHANGEFORM:
      return { ...state, formInput: action.text }
    case ADDTODO:
      return { todos: [...state.todos, action.text] }
    default:
      return state
  }
}

import { CHANGE_FORM_TEXT, ADDTODO } from './actionTypes'

export default function reducer (
  state = {
    todos: [],
    formInput: ''
  },
  action
) {
  switch (action && action.type) {
    case CHANGE_FORM_TEXT:
      return { ...state, formInput: action.text }
    case ADDTODO:
      return {
        todos: [
          ...state.todos,
          {
            text: action.text,
            date: action.date
          }
        ]
      }
    default:
      return state
  }
}

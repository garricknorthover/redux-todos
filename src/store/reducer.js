import { CHANGE_FORM_TEXT, ADDTODO } from './actionTypes'

export default function reducer (
  state = {todos:[]},
  action
) {
  switch (action && action.type) {
    case CHANGE_FORM_TEXT:
      return { ...state.formInput, fname: action.fname, secname: action.secname }
    case ADDTODO:
      return {
        todos: [
          ...state,
          {
            fname: action.fname,
            secname: action.secname,
            date: action.date
          }
        ]
      }
    default:
      return state
  }
}

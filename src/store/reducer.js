import { ADD_TODO, SET_NAME, SET_SURNAME, DELETE_TODO } from './actionTypes'
import { combineReducers } from 'redux'

export function todos (state = [], action) {
  switch (action && action.type) {
    case ADD_TODO:
      return [
        ...state,
          {
            name: action.name,
            surname: action.surname,
            date: action.date
          }
        ]
      
    case DELETE_TODO:
        return state.filter(todo => todo.date !== action.date)

    default:
      return state
  }
}

export function formData (state = { name: '', surname: '' }, action) {
  switch (action && action.type) {
    case SET_NAME:
      return { ...state, name: action.name }
    case SET_SURNAME:
      return { ...state, surname: action.surname }
    default:
      return state
  }
}

const reducer = combineReducers({
  todos,
  formData
})

export default reducer

import { ADDTODO, SET_NAME, SET_SURNAME } from './actionTypes'
import { combineReducers } from 'redux'

function todoReducer (state = { todos: [] }, action) {
  switch (action && action.type) {
    case ADDTODO:
      return {
        ...state,
        todos: [
          {
            name: action.name,
            surname: action.surname,
            date: action.date
          }
        ]
      }

    default:
      return state
  }
}

function formReducer (state = {name: '', surname: ''}, action) {
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
  todoReducer,
  formReducer
})

export default reducer

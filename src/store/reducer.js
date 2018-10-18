import { ONCHANGEFORM } from './actionTypes'

export default function reducer (state = [], action) {
  switch (action && action.type) {
    case ONCHANGEFORM:
      return  [...state, { formName: action.text }]
    default:
      return state
  }
}

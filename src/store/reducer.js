import { ONCHANGEFORM } from './actionTypes'

export default function reducer (
  state = {
    formInput: ''
  },
  action
) {
  switch (action && action.type) {
    case ONCHANGEFORM:
      return { ...state, formInput: action.text }
    default:
      return state
  }
}

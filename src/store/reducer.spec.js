import { onChangeForm } from './actions'
import reducer from './reducer'

describe('the store', () => {
  it('handles no input ', () => {
    expect(reducer({}, {})).toEqual({})
  })
})

describe('handles input of text from object', () => {
  it('imputs one character', () => {
    expect(
      reducer({}, {
        text: 'd',
        type: 'ONCHANGEFORM'
      })
    ).toEqual({ formInput: 'd' })
  })
})

describe('handles input of text from action function', () => {
  it('imputs one character', () => {
    expect(
      reducer({}, onChangeForm('d'))
    ).toEqual({ formInput: 'd' })
  })
})



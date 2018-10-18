import { onChangeForm } from './actions'
import reducer from './reducer'

describe('the store', () => {
  it('handles no input ', () => {
    expect(reducer(undefined, {})).toEqual([])
  })
})

describe('handles input of text', () => {
  it('imputs one character', () => {
    expect(
      reducer(undefined, {
        text: 'd',
        type: 'ONCHANGEFORM'
      })
    ).toEqual([{ formName: 'd' }])
  })
})

describe('handles input of text from action function', () => {
  it('imputs one character', () => {
    expect(
      reducer(undefined, onChangeForm('d'))
    ).toEqual([{ formName: 'd' }])
  })
})

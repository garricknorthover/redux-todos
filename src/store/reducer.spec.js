import { onChangeForm, addTodo } from './actions'
import reducer from './reducer'

describe('the store', () => {
  it('handles no input ', () => {
    expect(reducer({}, {})).toEqual({})
  })
})

describe('handles input of text from object', () => {
  it('imputs one character', () => {
    expect(
      reducer(
        {},
        {
          text: 'd',
          type: 'ONCHANGEFORM'
        }
      )
    ).toEqual({ formInput: 'd' })
  })
})

describe('handles input of text from action function', () => {
  it('imputs one character', () => {
    expect(reducer({}, onChangeForm('d'))).toEqual({ formInput: 'd' })
  })
})

describe('adds a todo', () => {
  it('adds a todo', () => {
    expect(reducer({ todos: [] }, addTodo('this is a todo'))).toEqual({
      todos: ['this is a todo']
    })
  })
})

describe('adds another todo', () => {
  it('adds another todo', () => {
    expect(
      reducer({ todos: ['this is a todo'] }, addTodo('this is another todo'))
    ).toEqual({ todos: ['this is a todo', 'this is another todo'] })
  })
})

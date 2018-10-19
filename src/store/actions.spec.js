import { addTodo } from './actions'
import { ADDTODO } from './actionTypes'

describe('test the actions', () => {
  it('give back the right object', () => {
    expect(addTodo('first', 'second', 1)).toEqual({
      type: ADDTODO,
      name: 'first',
      surname: 'second',
      date: 1
    })
  })
})

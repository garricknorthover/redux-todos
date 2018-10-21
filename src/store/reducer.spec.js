import { addTodo, setName, setSurname } from './actions'
import { todoReducer, formReducer } from './reducer'

describe('handles more fields', () => {
  it('acepts 2 fields', () => {
    expect(todoReducer({todos:[]}, addTodo('first', 'second', 31313))).toEqual({
      todos: [{ name: 'first', surname: 'second', date: 31313 }]
    })
  })
})

describe('handles more todos', () => {
  it('acepts another todoto array', () => {
    expect(todoReducer({todos : [{ name: 'first', surname: 'second', date: 31313 }]}, addTodo('anotherfirst', 'anothersecond', 22222))).toEqual({
      todos: [{ name: 'first', surname: 'second', date: 31313 }, { name: 'anotherfirst', surname: 'anothersecond', date: 22222 }]
    })
  })
})

describe('entering the name', () => {
  it('returns name in state', () => {
    expect(formReducer({}, setName('first'))).toEqual({ name: 'first' })
  })
})

describe('entering the surname after name is set', () => {
  it('keeps name in state and adds surname', () => {
    expect(formReducer({ name: 'first' }, setSurname('second'))).toEqual({
      name: 'first',
      surname: 'second'
    })
  })
})

describe('entering new name after name and surname is set', () => {
  it('makes new name in state and keeps surname', () => {
    expect(
      formReducer(
        {
          name: 'first',
          surname: 'second'
        },
        setName('new first')
      )
    ).toEqual({
      name: 'new first',
      surname: 'second'
    })
  })
})

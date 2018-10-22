import { addTodo, deleteTodo, setName, setSurname } from './actions'
import { todos, formData } from './reducer'

describe('deletes todos', () => {
  it('deletes todo by id', () => {
    expect(todos( [{ name: 'first', surname: 'second', date: 31313 }], deleteTodo(31313))).toEqual(
      []
    )
  })
})

describe('adds a todo', () => {
  it('add todo', () => {
    expect(todos([], addTodo('first', 'second', 31313))).toEqual(
[{ name: 'first', surname: 'second', date: 31313 }]
    )
  })
})

describe('handles more todos', () => {
  it('acepts another todoto array', () => {
    expect(todos( [{ name: 'first', surname: 'second', date: 31313 }], addTodo('anotherfirst', 'anothersecond', 22222))).toEqual(
      [{ name: 'first', surname: 'second', date: 31313 }, { name: 'anotherfirst', surname: 'anothersecond', date: 22222 }]
    )
  })
})

describe('entering the name', () => {
  it('returns name in state', () => {
    expect(formData({}, setName('first'))).toEqual({ name: 'first' })
  })
})

describe('entering the surname after name is set', () => {
  it('keeps name in state and adds surname', () => {
    expect(formData({ name: 'first' }, setSurname('second'))).toEqual({
      name: 'first',
      surname: 'second'
    })
  })
})

describe('entering new name after name and surname is set', () => {
  it('makes new name in state and keeps surname', () => {
    expect(
      formData(
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

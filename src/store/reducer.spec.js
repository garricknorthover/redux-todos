import {addTodo} from './actions'
import {todoReducer} from './reducer'

describe('handles more fields', () => {
    it('acepts 2 fields', ()=> {
        expect(todoReducer([], addTodo('first', 'second', 31313))).toEqual({todos: [{name: 'first', surname: 'second', date: 31313}]})
    })
})


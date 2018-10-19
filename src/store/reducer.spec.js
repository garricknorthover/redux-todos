import {addTodo} from './actions'
import reducer from './reducer'

describe('handles more fields', () => {
    it('acepts 2 fields', ()=> {
        expect(reducer([], addTodo('first', 'second', 31313))).toEqual({todos: [{fname: 'first', secname: 'second', date: 31313}]})
    })
})


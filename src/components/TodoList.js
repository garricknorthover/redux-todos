import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'

const TodoList = ({ addTodo, changeFormText, todos, formInput }) => (
  <div>
    <form
      onSubmit={e => {
        e.preventDefault()
        addTodo(formInput, Date.now())
        changeFormText('')
      }}
    >
      <input
        placeholder='add todo'
        onChange={event => changeFormText(event.target.value)}
        value={formInput}
      />
      <input type='submit' value='Add' />
    </form>
    <ul>{todos.map(todo => <li key={todo.date}>{todo.text}</li>)}</ul>

  </div>
)

const mapDispatchToProps = {
  changeFormText: actions.changeFormText,
  addTodo: actions.addTodo
}
const mapStateToProps = state => ({
  todos: state.todos,
  formInput: state.formInput
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

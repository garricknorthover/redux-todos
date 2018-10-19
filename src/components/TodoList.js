import React from 'react'
import { connect } from 'react-redux'
import { onChangeForm, addTodo } from '../store/actions'

const TodoList = ({ addTodo, onChangeForm, todos, formInput }) => (
  <div>
    <form
      onSubmit={e => {
        e.preventDefault()
        addTodo(formInput)
        onChangeForm('')
      }}
    >
      <input
        placeholder='add todo'
        onChange={event => onChangeForm(event.target.value)}
        value={formInput}
      />
      <input type='submit' value='Add' />
    </form>

    {todos.map(todo => <div>{todo}</div>)}
  </div>
)

const mapDispatchToProps = {
  onChangeForm: onChangeForm,
  addTodo: addTodo
}
const mapStateToProps = state => ({
  todos: state.todos,
  formInput: state.formInput
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

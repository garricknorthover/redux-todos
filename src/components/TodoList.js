import React from 'react'
import { connect } from 'react-redux'
import { addTodo, setName, setSurname } from '../store/actions'

const TodoList = ({ addTodo, todos, setName, setSurname, name, surname }) => (
  <div>
    <form
      onSubmit={e => {
        const date = Date.now()
        e.preventDefault()
        addTodo(name, surname, date)
      }}
    >
      <input
        placeholder='first name'
        onChange={event => setName(event.target.value)}
        value={name}
      />
      <input
        placeholder='second name'
        onChange={event => setSurname(event.target.value)}
        value={surname}
      />
      <input type='submit' value='Add' />
    </form>
    {/* <ul>{todos.map(todo => <li>{todo.fname}</li>)}</ul> */}

  </div>
)

const mapDispatchToProps = {
  setName: setName,
  setSurname: setSurname,
  addTodo: addTodo
}
const mapStateToProps = state => ({
  todos: state.todos,
  name: state.name,
  surname: state.surname
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

import React from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo, setName, setSurname } from '../store/actions'

const TodoList = ({ addTodo, deleteTodo, todos, setName, setSurname, name, surname }) => (
  <div>
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addTodo(name, surname, Date.now())
        setName('')
        setSurname('')
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
    <div>{name} {surname}</div>
    <ul>{todos.map(todo => <li key={todo.date}>{todo.name} {todo.surname} - <button onClick={(e) => deleteTodo(todo.date)}>X</button></li>)}</ul>

  </div>
)

const mapDispatchToProps = {
  setName: setName,
  setSurname: setSurname,
  addTodo: addTodo,
  deleteTodo: deleteTodo
}
const mapStateToProps = (state) => {
  console.log(state)
return ({  
  todos: state.todos,
  name: state.formData.name,
  surname: state.formData.surname})
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

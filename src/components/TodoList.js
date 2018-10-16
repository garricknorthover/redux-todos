import React, { Component } from 'react'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      formInput: { id: 0, text: '' }
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      todos: [...this.state.todos, this.state.formInput],
      formInput: { text: '' }
    })
  }

  handleChange = e => {
    this.setState({ formInput: { text: e.target.value, id: Date.now() } })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='add todo'
            onChange={this.handleChange}
            value={this.state.formInput.text}
          />
          <input type='submit' value='Add' />
        </form>
        {this.state.todos.map(todo => <div key={todo.id}>{todo.text}</div>)}
      </div>
    )
  }
}

export default TodoList

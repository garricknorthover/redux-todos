import React, { Component } from 'react'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      formInput: { id: Date.now(), text: '' }
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      formInput: {...this.state.formInput, id: Date.now()},
      todos: [...this.state.todos, this.state.formInput],
    })
  }

  handleChange = e => {
    this.setState({ formInput: { text: e.target.value } })
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

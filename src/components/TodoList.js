import React, { Component } from 'react'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      formInput: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.setState({ todos: [...this.state.todos, this.state.formInput], formInput: '',
     })
  }
  handleChange = e => {
    this.setState({ formInput: e.target.value })
  }

  render () {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input placeholder='add todo' onChange={this.handleChange} value={this.state.formInput} />
        <input type='submit' value='Add' />
      </form>
      {this.state.todos.map(todo => <div>{todo}</div>)}
      </div>
    )
  }
}

export default TodoList

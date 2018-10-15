import React, { Component } from 'react'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [
        {
          text: '',
          id: 0
        }
      ],
      formInput: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      todos: {
        text: [...this.state.todos.text, this.state.formInput],
        formInput: ''
      },
      id: this.state.todos.id + 1
    })
  }
  handleChange = e => {
    this.setState({ formInput: e.target.value })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='add todo'
            onChange={this.handleChange}
            value={this.state.formInput}
          />
          <input type='submit' value='Add' />
        </form>
        {this.state.todos.map(todo => <div>{todo}</div>)}
      </div>
    )
  }
}

export default TodoList

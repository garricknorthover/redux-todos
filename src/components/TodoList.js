import React, { Component } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
        todos: []
    }
  }
  render () {
    return <form onSubmit={this.handleSubmit}>
        <input placeholder="add todo" onChange={this.onChange} />
        <input type="submit" value="Add" />
    </form>
  }
}

export default TodoList

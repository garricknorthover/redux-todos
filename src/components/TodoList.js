import React, { Component } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    handleSubmit = (e) => {this.setState({todos: [...this.state.todos, this.state.formInput]})}  
    handleChange = (e) => {this.setState({formInput: e.target.value})}
  }
  render () {
    return <form onSubmit={this.handleSubmit}>
        <input placeholder="add todo" onChange={this.handleChange} />
        <input type="submit" value="Add" />
    </form> 
  }
}

export default TodoList

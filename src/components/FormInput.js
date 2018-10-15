import React, { Component } from 'react'
import '../App.css'

class FormInput extends Component {
  constructor (props) {
    super(props)
    this.state = { todos: [], value: '' }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({ todos: [...this.state.todos, this.state.value], value: ''})
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type='submit' value='add text' />
        </form>
      </div>
    )
  }
}

export default FormInput

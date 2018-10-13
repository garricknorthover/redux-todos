import React, { Component } from 'react'

class FormInput extends Component {
  constructor (props) {
    super(props)
    this.state = { todos: [] }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()

    this.setState({ todos: this.state.todos.push(this.state.value)})
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
          <button type='submit' value='add text' />
        </form>
      </div>
    )
  }
}

export default FormInput

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onChangeForm } from '../store/actions'

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
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Date.now(), text: this.state.formInput }
      ],
      formInput: ''
    })
  }

  handleChange = e => {
    this.props.onChangeForm(e.target.value)

  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='add todo'
            onChange={this.handleChange}
            value={this.props.formInput}
          />
          <input type='submit' value='Add' />
        </form>
        {this.state.todos.map(todo => <div key={todo.id}>{todo.text}</div>)}
      </div>
    )
  }
}
const mapDispatchToProps = {
  onChangeForm: onChangeForm
}
const mapStateToProps = state => ({
  formInput: ''
})
export default connect(mapStateToProps, mapDispatchToProps) (TodoList)

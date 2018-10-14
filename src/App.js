import React, { Component } from 'react'
import './App.css'
import FormInput from './components/FormInput'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <div>
            <FormInput />
          </div>

          Learn React

        </header>
      </div>
    )
  }
}

export default App

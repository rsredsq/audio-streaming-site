import React, { Component } from 'react'
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'
import Main from './Main'

Amplify.configure(aws_exports)

class App extends Component {
  render() {
    return <Main />
  }
}

export default App

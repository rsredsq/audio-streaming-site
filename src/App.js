import React, { Component } from 'react'
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'
import Main from './Main'
import Header from './Header'
import styled from 'styled-components'
import { Authenticator } from 'aws-amplify-react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

Amplify.configure(aws_exports)

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    )
  }
}

export default App

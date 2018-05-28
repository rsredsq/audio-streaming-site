import React, { Component } from 'react'
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'
import Main from './Main'
import Header from './Header'
import styled from 'styled-components'
import { AmplifyTheme, Authenticator } from 'aws-amplify-react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
`

const MyContainer = Object.assign({}, AmplifyTheme.Container, { display: 'flex', flexGrow: '1', flexDirection: 'column' })
const MyTheme = Object.assign({}, AmplifyTheme, { container: MyContainer })

Amplify.configure(aws_exports)

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header/>
        <Authenticator theme={MyTheme} >
          <Main/>
        </Authenticator>
      </Wrapper>
    )
  }
}

export default App

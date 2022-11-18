import * as React from 'react'
import './index.css'
import { render } from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/NavBar'

const App = () => {
  return (
    <ChakraProvider>
      <Nav></Nav>
    </ChakraProvider>
  )
}

render(<App />, document.getElementById('root'))

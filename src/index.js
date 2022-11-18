import * as React from 'react'
import './styles/global.css'
import { render } from 'react-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Nav from './components/NavBar'
import Home from './components/Home'

const theme = extendTheme({
  colors: {
    pink: {
      100: '#fe5454',
      200: '#fe5454',
      300: '#fe5454',
      400: '#fe5454',
      500: '#fe5454',
      600: '#fe5454',
      700: '#fe5454',
      800: '#fe5454',
      900: '#fe5454'
    }
  },
  components: {}
})

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Nav></Nav>
      <Home></Home>
    </ChakraProvider>
  )
}

render(<App />, document.getElementById('root'))

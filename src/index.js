import * as React from 'react'
import './styles/global.css'
import { render } from 'react-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Nav from './components/NavBar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/login'
import Post from './components/posts'

const theme = extendTheme({
  colors: {
    peach: {
      100: '#fe9898',
      200: '#fe7676',
      300: '#fe6565',
      400: '#fe5454',
      500: '#e54c4c',
      600: '#cb4343',
      700: '#b23b3b',
      800: '#983232',
      900: '#7f2a2a'
    }
  }
})

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<LoginForm />}></Route>
          <Route exact path="/posts" element={<Post />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

render(<App />, document.getElementById('root'))

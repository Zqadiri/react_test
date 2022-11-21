import React from 'react'
import {
  Box,
  Flex,
  Button,
  ButtonGroup,
  useColorModeValue,
  Center,
  Link
} from '@chakra-ui/react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import LoginForm from './login'

const Nav = () => {
  return (
    <>
      <BrowserRouter>
        <Box
          padding="20px 0 20px 0"
          bg={useColorModeValue('white.100', 'white.900')}
          px={6}
        >
          <Flex
            className="nav"
            height={10}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            {/* logo box */}
            <Center>
              <Box
                fontFamily="body"
                fontWeight="extrabold"
                fontSize={20}
                marginLeft="60px"
              >
                Logo
              </Box>
            </Center>

            {/* logo box */}
            <Center>
              <ButtonGroup spacing="5" marginRight="60px" className="nav">
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="ghost"
                    color="peach.400"
                    size="lg"
                    _hover={{ bg: '' }}
                    _active={{
                      bg: 'white.200',
                      transform: 'scale(0.90)'
                    }}
                    _focus={{ bg: '' }}
                  >
                    Home
                  </Button>
                </Link>
                <Link href="/login" style={{ textDecoration: 'none' }}>
                  <Button
                    type="submit"
                    fontWeight={400}
                    variant="solid"
                    bg="peach.400"
                    size="lg"
                    color="white"
                    borderRadius="15"
                    width="110px"
                    height="45px"
                    _hover={{ bg: '' }}
                    _active={{
                      bg: 'peach.200',
                      transform: 'scale(0.98)'
                    }}
                    _focus={{ bg: '' }}
                  >
                    Login
                  </Button>
                </Link>
              </ButtonGroup>
            </Center>
          </Flex>
        </Box>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<LoginForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Nav

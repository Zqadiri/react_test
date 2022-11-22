import React, { useEffect, useState } from 'react'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function getFormValues() {
  const storedValues = localStorage.getItem('form')
  console.log('stored Values: ' + typeof( storedValues))
  console.log(JSON.stringify(undefined));
  if (!storedValues)
  {
    return {
      email: '',
      password: ''
    }
  }
  return JSON.parse(storedValues)
}

const LoginForm = () => {
  const navigate = useNavigate('/posts')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [values, setValues] = useState(() => getFormValues())

  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(values))
  }, [values])

  function onSubmit(event) {
    event.preventDefault()
    setValues((prevValues) => ({
        email: email,
        password: password
      })
    )
    console.log("values : " + JSON.stringify(values));
    navigate('/posts') // localStorage does not work
  }

  return (
    <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white.50', 'white.800')}
    >
      <Stack
        spacing={10}
        w={'full'}
        maxW={'lg'}
        rounded={'xl'}
        boxShadow={'lg'}
        p={20}
        my={16}
      >
        <Heading
          lineHeight={1.1}
          fontWeight="extrabold"
          fontSize={{ base: '2xl', md: '4xl' }}
        >
          Login
        </Heading>
        <form onSubmit={onSubmit}>
          <FormControl id="email" isRequired>
            <FormLabel>email</FormLabel>
            <Input
              bg="gray.100"
              fontFamily={'Poppins'}
              fontWeight={400}
              size="lg"
              borderRadius={20}
              placeholder="email@example.com"
              _placeholder={{ opacity: 0.8, color: 'gray.500' }}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              bg="gray.100"
              size="lg"
              placeholder="password"
              _placeholder={{ opacity: 0.8, color: 'gray.500' }}
              borderRadius={20}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </FormControl>
          <Stack spacing={8}>
            <Button
              type="submit"
              marginTop={10}
              fontSize="2xl"
              fontWeight="extrabold"
              borderRadius={20}
              height="60px"
              bg={'peach.400'}
              color={'white'}
              _hover={{
                bg: 'peach.500'
              }}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  )
}

export default LoginForm

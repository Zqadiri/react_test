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

const LoginForm = () => {
  const [values, setValues] = useState([])

  useEffect(() => {
    if (!localStorage.getItem('form') || JSON.parse(localStorage.getItem('form')).length === 0) {
      localStorage.setItem('form', JSON.stringify(values))
    }
  }, [values])

  function onSubmit (e) {
    e.preventDefault()
    alert('An error occurred on the server. Please try again!!!')
  }

  function onChange (e) {
    setValues((previousValues) => ({
      ...previousValues,
      [e.target.name]: e.target.value
    }))
    console.log(values)
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
              onChange={onChange}
              value={values.email}
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
              onChange={onChange}
              value={values.password}
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

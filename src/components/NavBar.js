import React from 'react'
import {
  Box,
  Flex,
  Button,
  ButtonGroup,
  useColorModeValue,
  Center
} from '@chakra-ui/react'

const Nav = () => {
  return (
    <>
      <Box bg={useColorModeValue('white.100', 'white.900')} px={6}>
        <Flex
          height={10}
          marginTop="20px"
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
            <Box>
              <ButtonGroup spacing="5" marginRight="60px">
                <Button variant="ghost" colorScheme="pink" size="lg">
                  Home
                </Button>
                <Button
                  variant="solid"
                  colorScheme="pink"
                  size="lg"
                  borderRadius="15"
                  width="110px"
                  height="45px"
                >
                  Login
                </Button>
              </ButtonGroup>
            </Box>
          </Center>
        </Flex>
      </Box>
    </>
  )
}

export default Nav

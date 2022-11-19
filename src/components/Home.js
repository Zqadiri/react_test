import React from 'react'
import { Heading, Box } from '@chakra-ui/react'
import '../styles/global.css'

const Home = () => {
  return (
    <>
      <Box paddingLeft="80px" style={{ backgroundColor: '#f8f8f8' }}>
        <Heading paddingTop="25px" fontFamily="body" fontWeight="extrabold">
          Home
        </Heading>
      </Box>
    </>
  )
}

export default Home

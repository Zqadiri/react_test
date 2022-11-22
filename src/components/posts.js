import React, { useEffect, useState } from 'react'
import { Heading, Box, Container, SimpleGrid } from '@chakra-ui/react'
import '../styles/global.css'
import Card from "./card";
// let posts;

const Post = () => {
  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState('unloaded')

  useEffect(() => {
    requestPosts()
  }, [])

  async function requestPosts() {
    const ret = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await ret.json()
    // console.log("data" + JSON.stringify(data))
    setPosts(data)
  }

  return (
    <>
      <Box paddingLeft="80px" style={{ backgroundColor: '#f8f8f8' }}>
        <Heading paddingTop="25px" fontFamily="body" fontWeight="extrabold">
          Posts
        </Heading>
      </Box>
      <Container padding={10} maxW="80rem" centerContent>
        <SimpleGrid columns={[1, 3, 1, 3]}>
          {
            posts.map(function (data) {
              const {id, title, body} = data;
              return (
                <Card
                    key = {id}
                    title = {title}
                    body = {body}
                />
              );
            })}
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Post

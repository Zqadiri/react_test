import React from "react";
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack
} from "@chakra-ui/react";

function Card(props) {
  const { product, title, body } = props;

  return (
    <Box
      p={4}
      display={{ md: "flex" }}
      maxWidth="32rem"
      borderWidth={1}
      margin={2}
    >
      <Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >
        <Link
          my={1}
          display="block"
          fontSize="xl"
          lineHeight="tall"
          fontWeight="extrabold"
          href="#"
        >
          {title}
        </Link>
        <Box>
        <Text my={4} color="gray.500">
          {body}
        </Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default Card;

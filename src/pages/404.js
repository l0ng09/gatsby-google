import React from "react"
import { Center, Divider, Heading, Text } from "@chakra-ui/react"

const NotFound = () => {
  return (
    <Center mt="200px" color="gray.500">
      <Heading size="4xl">404</Heading>
      <Divider orientation="vertical" mx="20px" h="56px" />
      <Text fontSize="3xl" mt="30px">
        Page is not found
      </Text>
    </Center>
  )
}

export default NotFound

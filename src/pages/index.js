import React from "react"
import { Center, ChakraProvider, VStack, Image } from "@chakra-ui/react"
import theme from "../theme"
import SearchInput from "../components/SearchInput"
import Shortcut from "../components/Shortcut"

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Center>
        <VStack mt="100px" spacing="40px">
          <Image src="/google_logo.png" />
          <SearchInput />
          <Shortcut />
        </VStack>
      </Center>
    </ChakraProvider>
  )
}

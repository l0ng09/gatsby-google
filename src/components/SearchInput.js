import React from "react"
import {
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Input,
} from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons'

const VoiceIcon = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#4285f4"
        d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
      ></path>
      <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
      <path
        fill="#fbbc05"
        d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
      ></path>
      <path
        fill="#ea4335"
        d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
      ></path>
    </svg>
  )
}

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement
        boxSize="6"
        m="10px 16px"
        pointerEvents="none"
        children={<Search2Icon color="gray.400" />}
      />
      <Input
        w="580px"
        h="44px"
        _hover={{ boxShadow: "md" }}
        _focus={{ boxShadow: "md" }}
        fontSize="sm"
        borderRadius="full"
      />
      <InputRightElement boxSize="6" m="10px 16px" children={<VoiceIcon />} />
    </InputGroup>
  )
}

export default SearchInput
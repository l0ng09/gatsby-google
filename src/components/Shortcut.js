import { Image, VStack, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"
import styled from "@emotion/styled"
import { AddIcon } from "@chakra-ui/icons"
import BookmarkModal from "./BookmarkModal"
import { useSelector } from "react-redux"
import { InfoOutlineIcon } from "@chakra-ui/icons"

const Box = styled.div`
  width: 540px;
  min-height: 300px;
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  & > div {
    margin: 0 20px 0px;
  }
`

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #edf2f7;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Webname = styled.div`
  color: #718096;
  font-size: 12px;
  max-width: 60px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

// 根据 url 解析出 icon 的路径
const getIconByUrl = url => {
  const reg = /(http|https):\/\/(www.)?(\w+(\.)?)+/
  const result = url.match(reg)
  return result ? `${result[0]}/favicon.ico` : null 
}

const BookMark = ({ name, url, onClick }) => {
  const iconUrl = getIconByUrl(url)
  return (
    <VStack>
      <Circle onClick={onClick}>
        {iconUrl ? (
          <Image boxSize="30px" src={iconUrl} />
        ) : (
          <InfoOutlineIcon color="gray.500" fontSize="28px" />
        )}
      </Circle>
      <Webname maxW color="gray.500" fontSize="10px">
        {name}
      </Webname>
    </VStack>
  )
}

const initialValues = { name: "", url: "" }

const Shortcut = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [value, setValue] = useState(initialValues)
  const list = useSelector(state => state.bookmark.list)

  const handleClick = value => {
    onOpen()
    setValue(value)
  }
  const handleColse = () => {
    onClose()
    setValue(initialValues)
  }

  return (
    <Box w="580px" h="200px">
      {list.map(item => (
        <BookMark
          onClick={() => handleClick(item)}
          name={item.name}
          url={item.url}
          key={item.id}
        />
      ))}
      <Circle onClick={onOpen}>
        <AddIcon />
      </Circle>
      <BookmarkModal isOpen={isOpen} onClose={handleColse} value={value} />
    </Box>
  )
}

export default Shortcut

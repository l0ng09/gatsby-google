import { Spacer, Image, VStack, useDisclosure } from "@chakra-ui/react"
import React, { useEffect } from "react"
import styled from "@emotion/styled"
import { AddIcon } from "@chakra-ui/icons"
import BookmarkModal from "./BookmarkModal"

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

const BookMark = ({ name, url }) => {
  const iconUrl = `${url}/favicon.ico`
  return (
    <VStack>
      <Circle>
        <Image boxSize="30px" src={iconUrl} />
      </Circle>
      <Webname maxW color="gray.500" fontSize="10px">
        {name}
      </Webname>
    </VStack>
  )
}

const Shortcut = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const list = [
    {
      name: "百度",
      url: "https://www.baidu.com",
    },
    {
      name: "腾讯云",
      url: "https://cloud.tencent.com/",
    },
    {
      name: "极光推荐",
      url: "https://www.jiguang.cn/",
    },
  ]
  return (
    <Box w="580px" h="200px">
      {list.map(item => (
        <BookMark name={item.name} url={item.url} key={item.url} />
      ))}
      <Circle onClick={onOpen}>
        <AddIcon />
      </Circle>
      <BookmarkModal isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Shortcut

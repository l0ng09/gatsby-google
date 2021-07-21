import React from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
} from "@chakra-ui/react"

const BookmarkModal = ({ isOpen, onOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>添加快捷方式</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>名称</FormLabel>
              <Input />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>网址</FormLabel>
              <Input />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button style={{marginRight:'auto'}} colorScheme="red" onClick={onClose} mr={3}>
              删除
            </Button>
            <Button onClick={onClose} mr={3}>
              取消
            </Button>
            <Button colorScheme="blue">完成</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default BookmarkModal

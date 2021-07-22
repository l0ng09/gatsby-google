import React, { useEffect, memo } from "react"
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
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import {
  addBookmark,
  delBookmark,
  updateBookmark,
} from "../store/bookmarkSlice"

const BookmarkModal = ({ isOpen, onClose, value }) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: { name: "", url: "" },
    onSubmit: values => {
      values.id
        ? dispatch(updateBookmark(values))
        : dispatch(addBookmark(values))
      onClose()
    },
    onReset: () => onClose(),
  })

  const handleDelete = () => {
    dispatch(delBookmark(formik.values))
    formik.handleReset()
  }

  useEffect(() => {
    formik.setValues(value)
  }, [value])

  return (
    <>
      <Modal isOpen={isOpen} onClose={formik.handleReset}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>添加快捷方式</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>名称</FormLabel>
              <Input {...formik.getFieldProps("name")} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>网址</FormLabel>
              <Input {...formik.getFieldProps("url")} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              style={{ marginRight: "auto" }}
              colorScheme="red"
              onClick={handleDelete}
              mr={3}
            >
              删除
            </Button>
            <Button onClick={formik.handleReset} mr={3}>
              取消
            </Button>
            <Button colorScheme="blue" onClick={formik.handleSubmit}>
              完成
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default memo(BookmarkModal)

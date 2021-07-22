import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: [
    {
      id: 1,
      name: "百度",
      url: "https://www.baidu.com",
    },
    {
      id: 2,
      name: "腾讯云",
      url: "https://cloud.tencent.com/",
    },
  ],
}

const generateId = start => {
  let id = start || 0
  return function () {
    return ++id
  }
}
const getId = generateId(2)

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      const { payload } = action
      if (payload.name && payload.url) {
        state.list.push({ ...payload, id: getId() })
      }
    },
    updateBookmark: (state, action) => {
      const { payload } = action
      const index = state.list.findIndex(item => item.id === payload.id)
      if(index !== -1) state.list[index] = payload
    },
    delBookmark: (state, action) => {
      const { payload } = action
      if (payload.id) {
        state.list = state.list.filter(item => item.id !== payload.id)
      }
    },
  },
})

export const { addBookmark, delBookmark, updateBookmark } = bookmarkSlice.actions

export default bookmarkSlice.reducer

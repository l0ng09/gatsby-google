import React from "react"
import store from "./src/store/createStore"
import { Provider } from "react-redux"

// 给最外层元素加上一个 Provider
export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
)

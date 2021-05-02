import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import mainStore from "@store/store"
import { FC, ReactNode } from "react"

interface TestingWrapperProps {
  children: ReactNode
}

const TestingWrapper: FC<TestingWrapperProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={mainStore}>{children}</Provider>
    </BrowserRouter>
  )
}

export default TestingWrapper

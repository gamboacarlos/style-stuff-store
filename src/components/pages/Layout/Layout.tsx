import { Footer } from "@components/molecules"
import { NavBar } from "@components/organisms"
import { FC } from "react"

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
export default Layout

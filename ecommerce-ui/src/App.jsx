import { Outlet } from "react-router-dom"
import FooterPage from "./common/Footer/Footer"
import Header from "./common/Header"


function App() {

  return (
    <>
      <Header />
      <Outlet />
      <FooterPage />
    </>
  )
}

export default App

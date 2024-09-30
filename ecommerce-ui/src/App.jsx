import { Outlet } from "react-router-dom"
import Footer from "./common/Footer/Footer"
import Header from "./common/Header/Header"


function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

import { Outlet } from "react-router-dom"
import Footer from "./components/common/Footer/Footer"
import Header from "./components/common/Header/Header"


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

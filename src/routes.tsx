import { useContext } from "react"
import { Route, Routes } from "react-router-dom"

import Conta from "./pages/Conta"
import Home from "./pages/Home"
import { LoginContext } from "./context/auth"
import NotFound from "./pages/NotFound"

function MainRoutes(){

  const {isLoggedIn} = useContext(LoginContext)

  return(
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/conta/:id' element={isLoggedIn ? <Conta /> : <NotFound />}/>
    </Routes>
  )
}

export default MainRoutes
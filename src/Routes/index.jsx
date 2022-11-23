import {Routes, Route} from "react-router-dom"
//pages
import Home from "../Pages/Home"
import { Login } from "../Pages/Login"
import { DesignTheory } from "../Pages/DesignTheory"
import { UX } from "../Pages/UX"
import { UI } from "../Pages/UI"
import { Typography } from "../Pages/Typography"

export const RoutWrapper = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/designtheory" element={<DesignTheory/>}/>
      <Route path="/ux" element={<UX/>}/>
      <Route path="/ui" element={<UI/>}/>
      <Route path="/typography" element={<Typography/>}/>
    </Routes>
    </>
  )
}
import {Routes, Route} from "react-router-dom"
//pages
import { Login } from "../Pages/Login"
import { Posts } from "../Pages/Posts"
import { SinglePage } from "../Pages/SinglePage"
import { Error } from "../Pages/Error"

export const RoutWrapper = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Posts/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/:categoryName" element={<Posts/>}/>
      <Route path="/singlpage/:postId" element={<SinglePage/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </>
  )
}
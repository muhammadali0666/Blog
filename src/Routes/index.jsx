import {Routes, Route} from "react-router-dom"
//pages
import Home from "../Pages/Home"
import { Login } from "../Pages/Login"
import { Posts } from "../Pages/Posts"
import { SinglePage } from "../Pages/SinglePage"

export const RoutWrapper = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/:categoryName" element={<Posts/>}/>
      <Route path="/posts/:postId" element={<SinglePage/>}/>
    </Routes>
    </>
  )
}
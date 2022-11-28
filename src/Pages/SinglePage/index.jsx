import BigImg from "../../Assets/img/big.png"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const SinglePage = () => {

  const {postId} = useParams()

  useEffect(() => {
    async function myData() {
      const res = await fetch("https://n36-blog.herokuapp.com/posts/" + postId)
      const data = await res.json()
      console.log(data);
    }
    myData()
  },[postId])

  return(
    <div className="container">
      <h1>{postId}</h1>
      <img src={BigImg} alt="bg" />
    </div>
  )
}
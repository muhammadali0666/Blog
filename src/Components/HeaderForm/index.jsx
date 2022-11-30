import Search from "../../Assets/img/search.png"
import { useState } from "react"

export const HeadereForm = () => {

  const [input, setInput] = useState()
  console.log(input);
  return(
    <form className="header-form">
          <input type="text" onChange={(e) => setInput(e.currentTarget.value)} className="header-input" placeholder="Search"/>
          <button className="header-btn">
            <img src={Search} alt="search" className="header-img" />
          </button>
        </form>
  )
}
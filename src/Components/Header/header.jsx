import React from "react";
import { Logo } from "../Logo/index";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {HeadereForm} from "../HeaderForm"
import "./header.css";

export const Header = () => {

  const Navigate = useNavigate()

  const [token, setToken] = useState(null)

  useEffect(()=> {
    setToken(localStorage.getItem("token") || null)
  },[])

  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://n36-blog.herokuapp.com/categories`)
      const categories = await res.json()
      setData(categories)
    }
    getData()
  },[])
  console.log(data);

  return (
    <>
      <div className="container header">
        <Logo />
        {
        data.length && <ul className="header-list d-flex align-item-center me-auto ms-auto">
          {
            data.map((e) => (
              <li>
                <NavLink to={"/" + e.category_name} className="header-item">
                  {e.category_name}
                </NavLink>
              </li>
            ))
          }

        </ul>
      }
        <HeadereForm/>
      </div>
    </>
  );
};



{/* <ul className="header-list d-flex align-item-center me-auto ms-auto">

{
  token ?  
  <NavLink className="header-items" to="/">All</NavLink>
 : 
 Navigate('/login')

}
<li className="header-items">
  <NavLink className="header-item" to="/designtheory">Design Theory</NavLink>
</li>
<li className="header-items">
  <NavLink className="header-item" to="/ux">UX</NavLink>
</li>
<li className="header-items">
  <NavLink className="header-item" to="/ui">UI</NavLink>
</li>
<li className="header-items">
  <NavLink className="header-item" to="/typography">Typography</NavLink>
</li>
</ul> */}

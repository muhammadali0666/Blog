import Search from "../../Assets/img/search.png"

export const HeadereForm = () => {
  return(
    <form className="header-form">
          <input type="text" className="header-input" placeholder="Search"/>
          <button className="header-btn">
            <img src={Search} alt="search" className="header-img" />
          </button>
        </form>
  )
}
import {Header} from "../../Components/Header/header"
import {Footer} from "../../Components/Footer/footer"

export const Layout = ({children}) => {
  return(
    <>
    <header>
      <Header/>
    </header>
    <main>
      {children}
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}
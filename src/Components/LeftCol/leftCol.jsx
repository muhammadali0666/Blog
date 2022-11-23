import LeftColImg from "../../assets/img/right.png"
import Facebook from "../../assets/img/facebook.png"
import Github from "../../assets/img/github.png"
import Linkedin from "../../assets/img/linkedin.png"
import Twitter from "../../assets/img/twitter.png"
import "./leftCol.css"

export const LeftCol = () => {
  return(
    <div className="left-col">
      <h4 className="left-paragraph">
      What I do!
      </h4>
      <p className="left-col-paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.
      </p>
      <button className="left-col-btn">
      EXPLORE ME <img className="ms-5" src={LeftColImg} alt="img" />
      </button>
      <ul className="left-col-list list-unstyled">
        <li className="left-col-item">
          <a href="#" className="left-col-link">
            <img src={Facebook} alt="img" className="social-media" />
          </a>
        </li>
        <li className="left-col-item">
          <a href="#" className="left-col-link">
            <img src={Github} alt="img" className="social-media" />
          </a>
        </li>
        <li className="left-col-item">
          <a href="#" className="left-col-link">
            <img src={Twitter} alt="img" className="social-media" />
          </a>
        </li>
        <li className="left-col-item">
          <a href="#" className="left-col-link">
            <img src={Linkedin} alt="img" className="social-media" />
          </a>
        </li>
      </ul>
    </div>
  )
}
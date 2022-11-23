import Clock from "../../assets/img/clock.png"
import "./cards.css"

export const Card = () => {
  return(
      <div className="cards">
      <div className="card-box">
        <p className="card-box-p">
        September 24.2020
        </p>
        <p className="card-box-text">
        Design theory
        </p>
      </div>
      <h4 className="card-box-paragraph">
      Bad Design vs. Good Design: 5 Examples We can Learn From
      </h4>
      <div className="card-bottom">
        <img src={Clock} alt="clock" />
        <p className="card-bottom-p">
        3 minutes read
        </p>
      </div>
      <hr />
    </div>
  )
}
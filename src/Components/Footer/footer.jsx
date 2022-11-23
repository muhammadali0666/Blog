import React from "react";
import FooterLogo from "../../Assets/img/footer-logo.png";
import "./footer.css"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-inner">
          <a href="#" className="footer-logo-link">
            <img src={FooterLogo} alt="logo" className="footer-logo-img" />
          </a>
          <div className="footer-all">
          <div className="footer-box">
            <h4 className="footer-paragraph">FIGHT WITH ME ON:</h4>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-item-link">
                  Twitter
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item-link">
                  Instagram
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item-link">
                  Telegram
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item-link">
                  YouTube
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item-link">
                  Figma
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h4 className="footer-paragraph">FIGHT WITH ME ON:</h4>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-item-link">
                  Xalq Kutubxonasi
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item-link">
                  Websitee
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item-link">
                  Website
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item-link">
                  Play Market
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item-link">
                  App Store
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-item-link">
                  Xalq Kutubxonasi
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item-link">
                  Websitee
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item-link">
                  Website
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

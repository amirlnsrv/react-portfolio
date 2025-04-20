import React from "react";
import "./style.css";

import vk from "../../img/icons/vk.svg";
import instagram from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import linkedIn from "../../img/icons/linkedIn.svg";
import gitHub from "../../img/icons/gitHub.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/ssl1z" target="_blank">
                <img src={vk} alt=""></img>
              </a>
            </li>
            <li className="social__item">
              <a href="https://instagram.com/amirlanx" target="_blank">
                <img src={instagram} alt="Link"></img>
              </a>
            </li>
            <li className="social__item">
              <a href="https://twitter.com/ALansarov" target="_blank">
                <img src={twitter} alt="Link"></img>
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/amirlnsrv" target="_blank">
                <img src={gitHub} alt="Link"></img>
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/amir-lansarov-959611261/"
                target="_blank"
              >
                <img src={linkedIn} alt="Link"></img>
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 Amir Lansarov</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

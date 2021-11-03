import React from "react";
import './styles.scss'
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <ul>
          <li>La Team :</li>
            <li>Julien</li>
            <li>Jean-Charles</li>
            <li>Antoine</li>
            <li>Ariana</li>
          </ul>
          <hr />
        </div>
        <div className="copyright">
          <p className="copyright-text">
            &copy;{new Date().getFullYear()} Le Mur INC | All rights reserved
          </p>
        </div>

      </div>
    </div>
  )
}
export default Footer;

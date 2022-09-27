import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-inner">
          <h4 className="footer-title">
            Copyright © 2022 Mountain Shop. All Rights Reserved
          </h4>

          <div className="footer-menu">
            <ul>
              <li>
                <FaFacebook />
              </li>

              <li>
                <FaInstagram />
              </li>
              <li>
                <a href="/contact">Contact us </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

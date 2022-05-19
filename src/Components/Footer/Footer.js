import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="copyright">©️ Mallikarjun Kamtam </div>
      <div>
        <div className="footer-row">
          <div className="linkedin icon">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mallikarjunkamtam/"
            >
              <i className="fi fi-brands-linkedin"></i>
            </a>
          </div>

          <div className="insta icon">
            <a
              target="_blank"
              href="https://www.instagram.com/mallikarjun_kamtam/"
            >
              <i className="fi fi-brands-instagram"></i>
            </a>
          </div>
          <div className="codewars icon">
            <a
              target="_blank"
              href="https://www.codewars.com/users/Mallikarjun09"
            >
              <i className="fi fi-brands-js"></i>
            </a>
          </div>
        </div>

        <div className="footer-row">
          <div className="gmail icon">
            <a target="_blank" href="mailto:mallikarjunkamtam@gmail.com">
              <i className="fi fi-rs-envelope"></i>
            </a>
          </div>

          <div className="whatsapp icon">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=919550660375"
            >
              <i className="fi fi-brands-whatsapp"></i>
            </a>
          </div>
          <div className="github icon">
            <a target="_blank" href="https://github.com/MallikarjunKamtam">
              <i className="fi fi-brands-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

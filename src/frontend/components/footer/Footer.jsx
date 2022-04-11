import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="lt-footer-sec">
          <h3>© | 2021 | Srujana Penugonda</h3>
          <ul>
            <li>
              <a
                className="text-decoration-none"
                href="https://github.com/SRUJANA-PENUGONDA13"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none"
                href="https://www.linkedin.com/in/srujana-penugonda-49b9b9148"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none"
                href="https://twitter.com/Srujana_PS?t=xOANviVXChpqr8Jmxz9vfg&s=09"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
};

export { Footer };

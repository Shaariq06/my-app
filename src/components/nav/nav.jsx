import { useState } from "react";
import "./nav.css";

const Nav = ({ links }) => {
  const [isActive, setActive] = useState(false);

  const toggleMobileMenu = (menu) => {
    setActive(!isActive);
  };

  return (
    <header>
      <div id="brand">
        <a href="/">New Parks Academy</a>
      </div>
      <div className="navbar">
        <div className="right-nav">
          {links.map(({ link, label }, i) => (
            <a key={i} href={link} className="nav-lower-section-link">
              {label}
            </a>
          ))}
        </div>
      </div>
      <div id="hamburger-icon" onClick={toggleMobileMenu}>
        <div className="bar1" style={{ display: !isActive ? "block" : "none" }}></div>
        <div className="bar2" style={{ display: !isActive ? "block" : "none" }}></div>
        <div className="bar3" style={{ display: !isActive ? "block" : "none" }}></div>
        <div className="x1" style={{ display: isActive ? "block" : "none" }}></div>
        <div className="x2" style={{ display: isActive ? "block" : "none" }}></div>
        <ul className={`mobile-menu + ${isActive ? "open" : ""} `}>
          {links.map(({ link, label }, i) => (
            <li key={i}>
              <a href={link} className="nav-lower-section-link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
import MainLogo from "../assets/images/logo.svg";
import CloseIcon from "../assets/images/icon-menu-close.svg";
import MenueIcon from "../assets/images/icon-menu.svg";
import { useState } from "react";

const NavBar = () => {
  const [isopened, setOpened] = useState(false);
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={MainLogo} alt="" className="logo" />
      </div>
      <button className="nav-menu" onClick={() => setOpened(true)}>
        <img src={MenueIcon} alt="" className="nav-menu-icon" />
      </button>
      <div
        className={
          isopened ? "menue-links-container opened" : "menue-links-container "
        }
      >
        <button className="close-btn" onClick={() => setOpened(false)}>
          <img src={CloseIcon} alt="menu close" className="close-icon" />
        </button>

        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="" className="nav-list-link">
              Home
            </a>
          </li>
          <li className="nav-list-item">
            <a href="" className="nav-list-link">
              New
            </a>
          </li>
          <li className="nav-list-item">
            <a href="" className="nav-list-link">
              Popular
            </a>
          </li>
          <li className="nav-list-item">
            <a href="" className="nav-list-link">
              Trending
            </a>
          </li>
          <li className="nav-list-item">
            <a href="" className="nav-list-link">
              Categories
            </a>
          </li>
        </ul>
      </div>
      <div
        className={isopened ? "screen-dark" : "screen-dark close"}
        aria-hidden
      ></div>
    </div>
  );
};

export default NavBar;

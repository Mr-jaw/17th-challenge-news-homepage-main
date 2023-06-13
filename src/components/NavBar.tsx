import MainLogo from "../assets/images/logo.svg";
import CloseIcon from "../assets/images/icon-menu-close.svg";
import MenueIcon from "../assets/images/icon-menu.svg";
import { useState } from "react";

const NavBar = () => {
  const [isopened, setOpened] = useState(false);
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img src={MainLogo} alt="logo" className="logo" />
      </div>
      <button className="nav-menu" onClick={() => setOpened(true)}>
        <img src={MenueIcon} alt="menu button" className="nav-menu-icon" />
      </button>
      <div
        className={
          isopened ? "menue-links-container opened" : "menue-links-container "
        }
      >
        <button className="close-btn" onClick={() => setOpened(false)}>
          <img src={CloseIcon} alt="menu close" className="close-icon" />
        </button>

        <ul role="list" className="nav-list">
          <li role="listitem" className="nav-list-item">
            <a href="#" className="nav-list-link">
              Home
            </a>
          </li>
          <li role="listitem" className="nav-list-item">
            <a href="#" className="nav-list-link">
              New
            </a>
          </li>
          <li role="listitem" className="nav-list-item">
            <a href="#" className="nav-list-link">
              Popular
            </a>
          </li>
          <li role="listitem" className="nav-list-item">
            <a href="#" className="nav-list-link">
              Trending
            </a>
          </li>
          <li role="listitem" className="nav-list-item">
            <a href="#" className="nav-list-link">
              Categories
            </a>
          </li>
        </ul>
      </div>
      <div
        className={isopened ? "screen-dark" : "screen-dark close"}
        aria-hidden
      ></div>
    </nav>
  );
};

export default NavBar;

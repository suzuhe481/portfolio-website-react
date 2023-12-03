import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { AppContext } from "../../context/AppContext";

import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentPage, setCurrentPage } = useContext(AppContext);

  // Sets variable of whether the navmenu is open.
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Stores the name of the current page into the AppContext.
  const handleLinkClick = (e) => {
    const clicked = e.target.innerHTML;

    switch (clicked) {
      case "Home":
        setCurrentPage("home");
        break;
      case "About Me":
        setCurrentPage("about");
        break;
      case "Projects":
        setCurrentPage("projects");
        break;
      case "Contact Me":
        setCurrentPage("contact");
        break;
    }
  };

  return (
    <header>
      <div className={"menu-btn"}>
        <FontAwesomeIcon
          className={`menu-btn__burger-closed ${!menuOpen && "active"}`}
          icon={faBars}
          size="3x"
          onClick={toggleMenu}
        />
        <FontAwesomeIcon
          className={`menu-btn__burger-open ${menuOpen && "active"}`}
          icon={faX}
          size="3x"
          onClick={toggleMenu}
        />
      </div>

      <nav className="nav">
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li className="nav-menu__item">
            <Link
              to="/"
              className={`nav-menu__link ${currentPage === "home" && "active"}`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="nav-menu__item">
            <Link
              to=""
              className={`nav-menu__link ${
                currentPage === "about" && "active"
              }`}
              onClick={handleLinkClick}
            >
              About Me
            </Link>
          </li>
          <li className="nav-menu__item">
            <Link
              to="/projects"
              className={`nav-menu__link ${
                currentPage === "projects" && "active"
              }`}
              onClick={handleLinkClick}
            >
              Projects
            </Link>
          </li>

          <li className="nav-menu__item">
            <Link
              to=""
              className={`nav-menu__link ${
                currentPage === "contact" && "active"
              }`}
              onClick={handleLinkClick}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

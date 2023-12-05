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
  const toggleMenu = (boolean) => {
    setMenuOpen(boolean && !menuOpen);

    toggleBackgroundScrolling();
  };

  // Prevents scrolling of the page when the nav menu is open.
  const toggleBackgroundScrolling = () => {
    if (menuOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  // Stores the name of the current page into the AppContext.
  // Scrolls to page clicked.
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

    scrollToSection(clicked);
    toggleMenu(false);
  };

  // Scrolls to the given section.
  const scrollToSection = (section) => {
    switch (section) {
      case "Home":
        setCurrentPage("home");

        window.scrollTo({
          top: document.querySelector(".intro").offsetTop,
          behavior: "smooth",
        });

        break;
      case "About Me":
        setCurrentPage("about");

        window.scrollTo({
          top: document.querySelector(".about").offsetTop,
          behavior: "smooth",
        });
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
          onClick={toggleMenu}
        />
        <FontAwesomeIcon
          className={`menu-btn__burger-open ${menuOpen && "active"}`}
          icon={faX}
          onClick={toggleMenu}
        />
      </div>

      <nav className="nav">
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li className="nav-menu__item">
            <Link
              className={`nav-menu__link ${currentPage === "home" && "active"}`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="nav-menu__item">
            <Link
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

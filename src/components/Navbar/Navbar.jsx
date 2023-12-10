import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { AppContext } from "../../context/AppContext";

import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { currentPage, setCurrentPage } = useContext(AppContext);

  // Sets variable of whether the navmenu is open.
  const toggleMenu = (boolean) => {
    setMenuOpen(boolean && !menuOpen);
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

        window.scrollTo({
          top: document.querySelector(".projects").offsetTop,
          behavior: "smooth",
        });
        break;
      case "Contact Me":
        setCurrentPage("contact");

        window.scrollTo({
          top: document.querySelector(".contact").offsetTop,
          behavior: "smooth",
        });
        break;
    }
  };

  // Stores current scroll position.
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    pageChangeOnScroll(position);
  };

  // Changes page depending on current scroll position.
  const pageChangeOnScroll = () => {
    // Getting positions of sections.
    // Needs a slight offset or page won't be highlighted when selected from navbar.
    // const home = document.querySelector(".intro");
    const aboutPosition = document.querySelector(".about").offsetTop - 500;
    const projectsPosition =
      document.querySelector(".projects").offsetTop - 500;
    const contactPosition = document.querySelector(".contact").offsetTop - 500;

    // switch true is used to compare against conditionals in switch statements.
    switch (true) {
      case scrollPosition < aboutPosition:
        setCurrentPage("home");
        break;
      case scrollPosition > aboutPosition && scrollPosition < projectsPosition:
        setCurrentPage("about");
        break;
      case scrollPosition > projectsPosition &&
        scrollPosition < contactPosition:
        setCurrentPage("projects");
        break;
      case scrollPosition > contactPosition:
        setCurrentPage("contact");
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

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

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
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

import { useState, useContext, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { AppContext } from "../../context/AppContext";

import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentPage, setCurrentPage, scrollPosition, setScrollPosition } =
    useContext(AppContext);

  const { hash, key } = useLocation();

  // Sets variable of whether the navmenu is open.
  const toggleMenu = (boolean) => {
    const newMenuOpen = boolean && !menuOpen;
    setMenuOpen(newMenuOpen);

    // Prevents background from being scrolled when navbar is open on mobile
    const body = document.body;
    if (newMenuOpen === true) {
      console.log("hide");
      body.style.overflow = "hidden";
    } else {
      console.log("show");
      body.style.overflow = "visible";
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
    if (menuOpen) {
      toggleMenu(false);
    }
  };

  // Scrolls to the given section.
  // Accepts the section name as "About Me" or the hash "#about" (Without quotes).
  const scrollToSection = useCallback(
    (section) => {
      switch (section) {
        case "Home":
        case "#home":
          setCurrentPage("home");

          window.scrollTo({
            top: document.querySelector(".intro").offsetTop,
            behavior: "smooth",
          });

          break;
        case "About Me":
        case "#about":
          setCurrentPage("about");

          window.scrollTo({
            top: document.querySelector(".about").offsetTop,
            behavior: "smooth",
          });
          break;
        case "Projects":
        case "#projects":
          setCurrentPage("projects");

          window.scrollTo({
            top: document.querySelector(".projects").offsetTop,
            behavior: "smooth",
          });
          break;
        case "Contact Me":
        case "#contact":
          setCurrentPage("contact");

          window.scrollTo({
            top: document.querySelector(".contact").offsetTop,
            behavior: "smooth",
          });
          break;
      }
    },
    [setCurrentPage]
  );

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

  // Adds a scroll event listener to window.
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  });

  // Sets navbar selection on page load.
  // Keeps the current selection of the nav bar on page refresh.
  useEffect(() => {
    const newPage = hash.slice(1, hash.length);

    // If url contains # (hash/fragment)
    if (newPage) {
      setCurrentPage(hash.slice(1, hash.length));
    }
    // Set to home
    else {
      setCurrentPage("home");
    }
  }, [hash, setCurrentPage]);

  // Scrolls to specific section when using a direct link in the address bar.
  useEffect(() => {
    // Conditions when a link is directly used.
    if (key === "default" && hash) {
      scrollToSection(hash);
      return;
    }
  }, [hash, key, scrollToSection]);

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
              to="#home"
              className={`nav-menu__link ${currentPage === "home" && "active"}`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="nav-menu__item">
            <Link
              to="#about"
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
              to="#projects"
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
              to="#contact"
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

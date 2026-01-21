import { useState } from "react";
import { NavLink } from "react-router-dom";
import ddLogo from "../assets/Dragon Den Logo White.png";
import "./NavBar.css";
import Button from "./Button.jsx";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsFilterRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

function NavBar({ onReserveClick }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);
  const closeNav = () => setNavOpen(false);

  return (
    <>
      <nav className="navbar">
        {/* Left */}
        <NavLink to="/" className="logo-link">
          <div className="logo-box">
            <img className="dd-logo" src={ddLogo} alt="Dragon Den" />
          </div>
        </NavLink>

        {/* Center */}
        <div className="nav-item">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/menu">MENU</NavLink>
        </div>

        {/* Right */}
        <div className="nav-actions">
          <Button
            leftIcon={<GiForkKnifeSpoon />}
            size="md"
            variant="primary"
            className="reserve-btn"
            onClick={onReserveClick}
          >
            RESERVE A TABLE
          </Button>

          <div className="mobile-nav-toggle">
            <Button
              leftIcon={navOpen ? <IoClose /> : <BsFilterRight />}
              size="md"
              variant="ghost"
              onClick={toggleNav}
              className={navOpen ? "nav-close" : "nav-hamburger"}
              aria-label={navOpen ? "Close Nav Shelf" : "Open Nav Shelf"}
              aria-expanded={navOpen}
              aria-controls="mobile-nav"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Nav Shelf */}
      <div id="mobile-nav" className={`mobile-shelf ${navOpen ? "open" : ""}`}>
        <div className="mobile-links">
          <NavLink to="/" onClick={closeNav}>
            HOME
          </NavLink>
          <NavLink to="/about" onClick={closeNav}>
            ABOUT
          </NavLink>
          <NavLink to="/menu" onClick={closeNav}>
            MENU
          </NavLink>
        </div>

        <Button
          leftIcon={<GiForkKnifeSpoon />}
          size="md"
          variant="primary"
          className="reserve-btn"
          onClick={onReserveClick}
        >
          RESERVE A TABLE
        </Button>
      </div>
    </>
  );
}

export default NavBar;

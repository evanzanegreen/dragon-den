import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ddLogo from "../assets/Dragon Den Logo White.png";
import "./NavBar.css";
import Button from "./Button.jsx";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsFilterRight } from "react-icons/bs";

function NavBar() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  useEffect(() => {
    console.log("Reservation open:", isReservationOpen);
  }, [isReservationOpen]);

  const handleReservationClick = () => {
    setIsReservationOpen((prev) => !prev);
  };

  return (
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
          onClick={handleReservationClick}
        >
          RESERVE A TABLE
        </Button>

        <Button
          leftIcon={<BsFilterRight />}
          size="md"
          variant="ghost"
          className="nav-hamburger"
          aria-label="Open Menu"
        />
      </div>
    </nav>
  );
}

export default NavBar;

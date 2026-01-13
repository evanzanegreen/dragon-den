import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ddLogo from "../assets/Dragon Den Logo White.png";
import "./NavBar.css";
import Button from "./Button.jsx";
import { GiForkKnifeSpoon } from "react-icons/gi";

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
      <div className="nav-left">
        <NavLink to="/" className="logo-link">
          <div className="logo-box">
            <img className="dd-logo" src={ddLogo} alt="Dragon Den" />
          </div>
        </NavLink>
      </div>

      {/* Center */}
      <div className="nav-center">
        <div className="nav-item">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/menu">MENU</NavLink>
        </div>
      </div>

      {/* Right */}
      <div className="nav-right">
        <Button
          leftIcon={<GiForkKnifeSpoon />}
          size="md"
          variant="primary"
          onClick={handleReservationClick}
        >
          RESERVE A TABLE
        </Button>
      </div>
    </nav>
  );
}

export default NavBar;

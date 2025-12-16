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
      {/*Logo*/}
      <NavLink to="/">
        <div className="logo-box">
          <img className="dd-logo" src={ddLogo} alt="" />
        </div>
      </NavLink>

      {/*Links*/}
      <div className="nav-item">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/menu">MENU</NavLink>
      </div>

      {/*Reservation Button*/}
      <Button
        leftIcon={<GiForkKnifeSpoon />}
        size="md"
        variant="primary"
        onClick={handleReservationClick}
      >
        RESERVE A TABLE
      </Button>
    </nav>
  );
}

export default NavBar;

import { NavLink } from "react-router-dom";
import ddLogo from "../assets/Dragon Den Logo White.png";
import "./NavBar.css";
import Button from "../components/Button.jsx";
import { GiForkKnifeSpoon } from "react-icons/gi";

function NavBar() {
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
      {/*<Button leftIcon={<GiForkKnifeSpoon />}>Reserve a Table</Button>*/}
    </nav>
  );
}

export default NavBar;

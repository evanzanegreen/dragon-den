import { NavLink } from "react-router-dom";
import ddLogo from "../assets/Dragon Den Logo White.png";
import "./NavBar.css";

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
    </nav>
  );
}

export default NavBar;

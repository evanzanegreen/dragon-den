import { NavLink } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="page-center">
      <div className="menu-empty-state">
        <h1>Page Not Found</h1>
        <p>The page you’re looking for doesn’t exist or has been moved.</p>

        <NavLink to="/menu" className="not-found-link">
          Back to Menu
        </NavLink>
      </div>
    </section>
  );
}

export default NotFound;

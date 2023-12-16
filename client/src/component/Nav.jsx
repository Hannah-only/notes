import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="p-3 shadow position-fixed top-0 w-100 bg-white z-3">
      <div className="layout-container d-flex justify-content-between align-items-center">
        <NavLink to="/" className="text-black fs-3 fw-bold">
          NOTEAPP
        </NavLink>
        <div className="d-flex gap-3 align-items-center">
          <NavLink to="/signin">
            <Button variant="outline-primary">Sign in</Button>
          </NavLink>
          <NavLink to="/register">
            <Button variant="danger">Register</Button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="Navbar">
        <div>
          <h3 className="Name">Tarun's Portfolio</h3>
        </div>
        <div className="NavLinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/education">Education</NavLink>
          <span className="none">
            <NavLink to="/projects">Projects</NavLink>
          </span>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </>
  );
};

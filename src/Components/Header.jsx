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
          <NavLink to="/about">About</NavLink>
          <NavLink to="/education">education</NavLink>
          <NavLink to="/projects">projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </>
  );
};

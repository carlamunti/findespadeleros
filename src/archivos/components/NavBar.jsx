import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import "../../App.css";

export const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} alt="Logo" />
        <NavLink to="/" activeClassName="active">
          Inicio
        </NavLink>
        <NavLink to="/calendar" activeClassName="active">
          Calendario
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contacto
        </NavLink>
      </div>
    </>
  );
};

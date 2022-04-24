import React from "react";
import logo from "../imagenes/FreeCodeCamp-logo.png";
import '../stylesheets/Header.css';

const Header = () => (
    <div className="freecodecamp-logo-contenedor">
        <img
          src={logo}
          className="freecodecamp-logo"
          alt="logo de free code camp"
        />
      </div>
);

export default Header;
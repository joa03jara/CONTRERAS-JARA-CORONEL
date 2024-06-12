import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Imagenes/Logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img className="img-logo" src={Logo} alt="Logo" />
      </div>

      <div className="copyright">
        <p>
          <FontAwesomeIcon icon={faCopyright} />
          &nbsp;{new Date().getFullYear()} The Home Academy. Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;

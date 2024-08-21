import React from "react";
import "./Header.css";
import logo from "../../assets/logo-header.png"; // Caminho ajustado

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Logo Cenarias" />
        </div>
        <nav className="menu">
          <a href="#home">Nossos Espaços</a>
          <a href="#about">Quem Somos</a>
          <a href="#FAQ">Dúvidas Frequentes</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import './Header.css'; // Importa o arquivo CSS para estilização

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          {/* Aqui você pode substituir pelo caminho da sua logo */}
          <h1>Cenarias</h1>
        </div>
        <nav className="menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

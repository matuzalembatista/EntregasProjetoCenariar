import React from "react";
import imgInicial from "../../assets/img-inicial.png"; // Caminho ajustado
import "./imgInicial.css";

function ShowImgInicial() {
  return (
    <div className="imgFundo">
      <img src={imgInicial} alt="Logo Cenarias" />
    </div>
  );
}

export default ShowImgInicial;

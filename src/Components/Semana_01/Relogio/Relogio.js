import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Style/Relogio.module.css";

function iniciarRelogio() {
  function atualizarRelogio() {
    const dataAtual = new Date();
    const horas = dataAtual.getHours().toString().padStart(2, "0");
    const minutos = dataAtual.getMinutes().toString().padStart(2, "0");
    const segundos = dataAtual.getSeconds().toString().padStart(2, "0");
    const horarioFormatado = horas + ":" + minutos + ":" + segundos;
    const relogioElement = document.getElementById("relogio");
    if (relogioElement) {
      relogioElement.innerText = horarioFormatado;
    }
  }

  setInterval(atualizarRelogio, 1);
}

function Relogio() {
  React.useLayoutEffect(() => {
    iniciarRelogio();
  }, []);

  return (
    <>
      <div>
        <h1 className={Styles.titulo}>Relógio Digital </h1>
        <div id="relogio" className={Styles.relogio}></div>
      </div>

      <Link to="/" className="link_voltarHome">
        {" "}
        Voltar para a Home{" "}
      </Link>
    </>
  );
}

export default Relogio;

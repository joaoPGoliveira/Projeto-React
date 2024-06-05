import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Home/Style/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={Styles.titulo_principal}> Atividades de React </h1>

      <h2 className={Styles.titulos_semanas}> Semana 01 </h2>

      <ul className={Styles.listas}>
        <li>
          <Link
            to="./Components/Semana_01/Relogio/Relogio"
            className={Styles.links_principais}
          >
            {" "}
            Relogio{" "}
          </Link>
        </li>
        <br />

        <li>
          <Link
            to="./Components/Semana_01/Letreiro/Letreiro"
            className={Styles.links_principais}
          >
            {" "}
            Letreiro{" "}
          </Link>
        </li>
      </ul>

      <h2 className={Styles.titulos_semanas}> Semana 02 </h2>

      <ul className={Styles.listas}>
        <li>
          <Link
            to="./Components/Semana_02/Contador/Contador"
            className={Styles.links_principais}
          >
            {" "}
            Contador{" "}
          </Link>
        </li>
      </ul>

      <h2 className={Styles.titulos_semanas}> Semana 03 </h2>

      <ul className={Styles.listas}>
        <li>
          <Link
            to="./Components/Semana_03/Scripts/index"
            className={Styles.links_principais}
          >
            {" "}
            Aula componentes{" "}
          </Link>
        </li>
      </ul>

      <h2 className={Styles.titulos_semanas}> Semana 04 </h2>

      <ul className={Styles.listas}>
        <li>
          <Link
            to="./Components/Semana_04/Scripts/index"
            className={Styles.links_principais}
          >
            {" "}
            Aula interatividades {" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

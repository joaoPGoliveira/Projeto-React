import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Style/Letreiro.module.css";
import "../../../index.css";

class Letreiro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textoVisivel: "",
      indice: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const { indice } = this.state;
      const texto = "Conheça a Fatec!";
      const proximoIndice = (indice + 1) % texto.length;
      this.setState({
        textoVisivel: texto.substring(0, proximoIndice + 1),
        indice: proximoIndice,
      });
    }, 110);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <>
        <div className={Styles.body}>
          <br />
          <h1 className={Styles.titulo}> LETREIRO </h1> <br />
          <h1 className={Styles.frase}> {this.state.textoVisivel}</h1>
        </div>

        <Link to="/" className="link_voltarHome">
          {" "}
          Voltar para a Home{" "}
        </Link>
      </>
    );
  }
}

export default Letreiro;

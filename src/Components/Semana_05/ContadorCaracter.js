import { useState } from 'react';
import Styles from "./Style/ContadorCaracter.module.css";

function ContadorDeCaracteres() {
  const [texto, setTexto] = useState('');
  const [contagemCaracteres, setContagemCaracteres] = useState(0);
  const [letras, setLetras] = useState(0);
  const [numeros, setNumeros] = useState(0);
  const [simbolos, setSimbolos] = useState(0);
  const [espacos, setEspacos] = useState(0);

  function AtualizarTexto(evento) {
    const textoDigitado = evento.target.value;
    const tamanho = textoDigitado.length;
    const quantidadeLetras = textoDigitado
      .split('')
      .filter((caracter) => /\p{L}/u.test(caracter)).length;
    const quantidadeNumeros = textoDigitado
      .split('')
      .filter((caracter) => /[0-9]/.test(caracter)).length;
    const quantidadeSimbolos = textoDigitado
      .split('')
      .filter((caracter) => /[^a-zA-Z0-9\s]/.test(caracter)).length;
    const quantidadeEspacos = textoDigitado.split('').filter((caracter) => /\s/.test(caracter)).length;

    setTexto(textoDigitado);
    setContagemCaracteres(tamanho);
    setLetras(quantidadeLetras);
    setNumeros(quantidadeNumeros);
    setSimbolos(quantidadeSimbolos);
    setEspacos(quantidadeEspacos);
  }

  return (
    <>
      <h2 className={Styles.titulo}>Contador de Caracteres</h2>
      <input value={texto} onChange={AtualizarTexto} className={Styles.input}/>
      <div className={Styles.container}>
        <p className={Styles.paragrafos}>Total de Caracteres {contagemCaracteres}</p>
        <p className={Styles.paragrafos}>Letras {letras}</p>
        <p className={Styles.paragrafos}>Números {numeros}</p>
        <p className={Styles.paragrafos}>Símbolos {simbolos}</p>
        <p className={Styles.paragrafos}>Espaços {espacos}</p>
      </div>
    </>
  );
}

export default ContadorDeCaracteres;
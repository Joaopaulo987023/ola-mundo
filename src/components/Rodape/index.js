import React from 'react';
import styles from "./Ropade.module.css";
import {ReactComponent as MarcaRegistrada} from "assets/marca_registrada.svg";
//pegando um svg como se fosse um componente react
export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <MarcaRegistrada/>Desenvolvido por Alura.
    </footer>
  )
}

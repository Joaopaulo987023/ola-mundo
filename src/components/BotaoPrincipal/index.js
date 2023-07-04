import React from 'react';
import styles from "./BotaoPrincipal.module.css";
export default function BotaoPrincipal({children,tamanho}) {
  return (
    <button className={`
    ${styles.botaoPrincipal}
    ${styles[tamanho]}`} //passando  varios estilos de forma dinamica, se tamanho estiver vazio o valor botao principal é acionado
    > 
        {children} 
    </button>
  )
}

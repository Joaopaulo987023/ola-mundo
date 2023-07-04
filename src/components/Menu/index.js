import React from 'react'

import styles from './Menu.module.css'
import MenuLink from '../MenuLink'

export default function Menu() {

  return (
    <header>
         <nav className={styles.navegacao}>
            <MenuLink to="/">Inicio</MenuLink>
            <MenuLink to="/sobremin">Sobre min</MenuLink>
        </nav>   
    </header>
  )
}

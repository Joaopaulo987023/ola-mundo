import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./MenuLink.module.css"


export default function MenuLink({children, to}) {
    
  return (
    
      <NavLink  className={({isActive})=>
        `${styles.link} 
          ${isActive ? styles.link_destacado : ""}`

      } to={to} end>
            {children}
      </NavLink>
        //fazando uma condicional para saber se está na pagina com o nome do link, se estiver o nome fica sublinhado
            
    
  )
}

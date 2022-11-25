import React from 'react'
import styles from './navbar.module.css';

export const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="img/robo.png" alt="logo" className={styles.image} />
            <h1>Safe Move</h1>
        </div>
        <ul className={styles.linkItems}>
            <li>
                Vamo
            </li>
            <li>
                Vamo
            </li>
        </ul>
    </nav>
  )
}

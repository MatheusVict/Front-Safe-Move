import React from 'react'
import styles from './navbar.module.css';

export const NavBar: React.FC = () => {
  const token = localStorage.getItem('token');

  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="img/robo.png" alt="logo" className={styles.image} />
            <h1>Safe Move</h1>
        </div>
        <ul className={styles.linkItems}>
            {token && (
            <>
            <li>
              <a href='/home'>Home</a>
            </li>
            <li>
                <a href='*'>Perfil</a>
            </li>
            </>
            )}
        </ul>
    </nav>
  )
}

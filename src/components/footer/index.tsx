import React from 'react';
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src="img/logo.png" alt="logo" className={styles.image} />
        <p>
           &copy; 2022
        </p>
    </footer>
  )
}

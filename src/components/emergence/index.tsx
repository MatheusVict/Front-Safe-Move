import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillAlert} from 'react-icons/ai'
import styles from './emergence.module.css';

export const ButtonEmergence = () => {
  return (
    <div className={styles.container}>
      <Link to='/guards'><img src="img/sos.png" alt="SOS"  className={styles.img}/></Link>
      <h1 className={styles.title}>Emergência</h1>
      <Link to='/guards'><button className={styles.button}><AiFillAlert /> CONTATO</button></Link>
    </div>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonEmergence } from '../../components/emergence'
import styles from './home.module.css'

export const Home = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem('token');

  if (!token) navigate('/');

  return (
    <div className={styles.container}>
      <ButtonEmergence/>
    </div>
  )
}

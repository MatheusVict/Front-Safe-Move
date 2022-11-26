import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { errorAlert } from '../../components/alerts/ErroAlert';
import { CardGuard } from '../../components/cardGuard';
import { services } from '../../config/users/userService';
import { userService } from '../../interfaces/userServiceProps';
import styles from './guards.module.css'

export const Guards = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem('token');

  if (!token) navigate('/');

  const [guardians, setGuardians] = useState<userService[]>([]);

  useEffect(() => {
     services.getAll().then((dados) => {
      setGuardians(dados)
    }).catch((err) => errorAlert())
  }, [])

  return (
    <div className={styles.container}>
      <h1>Meu Guardiões:</h1>
      {guardians.map((guards) => {
        return <li key={guards.id}>
          {guards.guardians?.map((gd) => {
            return <CardGuard
            email={gd.email}
            guardianName={gd.guardianName}
            key={gd.id}
            />
          })}
        </li>
      })}
    </div>
  )
}

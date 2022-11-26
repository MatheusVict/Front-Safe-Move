import React, { useCallback } from 'react'
import { services } from '../../config/users/userService';
import styles from './cardGUard.module.css'
import {AiOutlineMail} from 'react-icons/ai';
import { successAlert } from '../alerts/successAlert';
import { errorAlert } from '../alerts/ErroAlert';

interface GuardProps {
  guardianName: string;
  email: string;
}

export const CardGuard: React.FC<GuardProps> = ({ email, guardianName }) => {

  const handleSend = useCallback(async () => {
    await services.sendMail({to: email, message: 'EStou chegando', subject: 'Aqui está minha localização'}).then(() => {
      successAlert('Seu guardião foi informado com sucesso');
    }).catch((error) => errorAlert())
  }, [email])

  return (
    <div className={styles.container}>
      <h3 className={styles.name}>Guardião: {guardianName}</h3>
      <p className={styles.email}>email: {email}</p>
      <button onClick={handleSend} className={styles.btn}><AiOutlineMail /> Enviar email</button>
    </div>
  )
}

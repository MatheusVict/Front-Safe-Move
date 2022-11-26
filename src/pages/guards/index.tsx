import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { errorAlert } from '../../components/alerts/ErroAlert';
import { CardGuard } from '../../components/cardGuard';
import { services } from '../../config/users/userService';
import { userService } from '../../interfaces/userServiceProps';

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
    <div>
      {guardians.map((guards) => {
        return <li key={guards.id}>
          {guards.guardians?.map((gd) => {
            return <CardGuard 
              key={gd.id}
              email={gd.email}
              guardianName={gd.guardianName}
            />
          })}
        </li>
      })}
    </div>
  )
}

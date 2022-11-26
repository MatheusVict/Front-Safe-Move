import React, { useEffect, useState } from 'react'
import { errorAlert } from '../../components/alerts/ErroAlert'
import { ProfileCard } from '../../components/profile'
import { services } from '../../config/users/userService'
import { userService } from '../../interfaces/userServiceProps'

export const Profile = () => {
  const [user, setUSer] = useState<userService | undefined>()

  useEffect(() => {
    services.getUser().then((dados) => {
      setUSer(dados);
    }).catch((err) => errorAlert())
  })
  return (
    <div>
      {user && (
        <ProfileCard 
          email={user.email}
          userName={user.userName}
          key={user.id}
        />
      )}
    </div>
  )
}

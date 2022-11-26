import React from 'react'

interface ProfileProps {
  userName: string | undefined;
  email: string | undefined;
}

export const ProfileCard: React.FC<ProfileProps> = ({ userName, email }) => {
  return (
    <div>
      <h1>Perfil</h1>
      <h2>Olá: {userName}</h2>
      <p>Email: {email}</p>
    </div>
  )
}

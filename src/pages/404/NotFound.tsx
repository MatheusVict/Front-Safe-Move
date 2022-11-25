import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <Link to='/'>Home</Link>
    </div>
  )
}

import React, { useCallback, useState } from 'react'
import { services } from '../../config/users/userService'

export const Cad = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  const handleregis = useCallback(async (e: any) => {
    e.preventDefault()
    await services.register({userName: name, email: email, password: pass}).then(() => {
      console.log('foi')
    }).catch((err) => console.log(err))
  }, [email, name, pass])

  return (
    <div>
      <form onSubmit={handleregis}>
        <input type="text" onChange={(e: any) => setName(e.target.value)} placeholder='nome'/>
        <input type="text" onChange={(e: any) => setEmail(e.target.value)} placeholder='email'/>
        <input type="text" onChange={(e: any) => setPass(e.target.value)} placeholder='pass'/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

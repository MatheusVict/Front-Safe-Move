import React, { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { services } from '../../config/users/userService'
import styles from './login.module.css'

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')


  const handleLog = useCallback(async (e: any) => {
    e.preventDefault()
    await services.login({email: email, password: pass}).then(() => {
      navigate('/home');
    }).catch((err) => console.log(err))
  }, [email, pass, navigate])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Login
        <div className={styles.line}></div>
      </div>
      <div className={styles.login_box}>
        <div className={styles.container}>
          <section className={styles.content}>
            <div className={styles.item} id={styles.content_1}>              
              <form onSubmit={handleLog}>
                <div className={styles.user_box}>
                  <input type="text" onChange={(e: any) => setEmail(e.target.value)}/>
                  <label>Usuário</label>
                </div>
                <div className={styles.user_box}>
                  <input type="password" onChange={(e: any) => setPass(e.target.value)}/>
                  <label>Senha</label>
                </div>
                <div className={styles.Acesso}>
                  <button type='submit'>Acessar</button>
                </div>
                <div className={styles.Acesso2}>
                  <Link to='/cadastro'>Cadastro</Link>
                </div>
              </form>
            </div>                                         
          </section>
        </div>
      </div>  
    </div> 
  )
}

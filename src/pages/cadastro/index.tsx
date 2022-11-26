import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { successAlert } from '../../components/alerts/successAlert';
import { services } from '../../config/users/userService';
import styles from './cadastro.module.css'

export const Cad = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  const handleregis = useCallback(async (e: any) => {
    e.preventDefault()
    await services.register({userName: name, email: email, password: pass}).then(() => {
      successAlert('COnta criada com sucesso')
      navigate('/home')
    }).catch((err) => console.log(err))
  }, [email, name, pass, navigate])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Cadastro
        <div className={styles.line}></div>
      </div>
      <div className={styles.login_box}>
        <div className={styles.container}>
          <section className={styles.content}>
            <div className={styles.item} id={styles.content_1}>              
              <form onSubmit={handleregis}>
                <div className={styles.user_box}>
                  <input type="text" onChange={(e: any) => setName(e.target.value)}/>
                  <label>Usuário</label>
                </div>
                <div className={styles.user_box}>
                  <input type="text" onChange={(e: any) => setEmail(e.target.value)}/>
                  <label>Email</label>
                </div>
                <div className={styles.user_box}>
                  <input type="password" onChange={(e: any) => setPass(e.target.value)}/>
                  <label>Senha</label>
                </div>
                <div className={styles.Acesso}>
                  <button type='submit'>Cadastrar</button>
                </div>
              </form>
            </div>                                         
          </section>
        </div>
      </div>  
    </div> 
  )
}

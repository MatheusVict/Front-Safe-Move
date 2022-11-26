import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NotFound } from '../../pages'
import { Cad } from '../../pages/cadastro'
import { Guards } from '../../pages/guards'
import { Home } from '../../pages/Home'
import { Login } from '../../pages/login'
import { Profile } from '../../pages/profile'

export const RoutesMain = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Cad />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/guards' element={<Guards />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  )
}

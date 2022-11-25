import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NotFound } from '../../pages'

export const RoutesMain = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

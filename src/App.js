import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from './app/components/Menu'
import Routes from './app/routes/Routes'


const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes click={alert} />
    </BrowserRouter>
  )
}

export default App
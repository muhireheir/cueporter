import React from 'react'
import {Routes as Switch,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Completed from '../pages/Completed'

const Routes = (props) => {
  return (
    <Switch>
    <Route  path="/" element={<Home {...props} />} />
    <Route  path="/completed" element={<Completed {...props} />} />
    {/*  */}
  </Switch>
  )
}

export default Routes
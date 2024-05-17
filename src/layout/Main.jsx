import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Main = () => {
  return (
    <div>
<Navbar />
<Outlet />
<footer> footler</footer>

    </div>
  )
}

export default Main
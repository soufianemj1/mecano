import React from 'react'
import {NavLink} from 'react-router-dom' 

function Navbar() {
  return (
    <div className='fixed z-10 top-0 left-0 right-0'>
    <div className="navbar bg-slate-900">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Mecano.ma</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><NavLink to="/experts">Les experts</NavLink></li>
      
      <li><NavLink to="/cars">Les voitures</NavLink></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar
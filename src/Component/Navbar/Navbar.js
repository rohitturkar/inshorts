import React from 'react'
import "./Navbar.css"

import TemporaryDrawer from "../Drawer/Drawer"

const Navbar = ({setCategory}) => {
  return (
    <div className='nav'>
      <div className='icon'>
          <TemporaryDrawer setCategory={setCategory}/>
      </div>

      
      <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"  height="80%" alt="Inshorts"/>
        
      
    </div>
  )
}

export default Navbar
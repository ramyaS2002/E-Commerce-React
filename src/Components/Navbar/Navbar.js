import React, { useState } from 'react'
import './Navbar.css'

import logo from  '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  const [menu, setMenu]=useState("")


  return (
    <div className='navbar'>
       
      <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>SHOPPER</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}> <NavLink style={{textDecoration:'none'}} to='/'>Shop</NavLink> {menu === "shop" && <hr />}</li>
        <li onClick={()=>{setMenu("mens")}}> <NavLink style={{textDecoration:'none'}}   to='/mens'>Men</NavLink>  {menu === "mens" && <hr />}</li>
        <li onClick={()=>{setMenu("womens")}}> <NavLink style={{textDecoration:'none'}}   to='/womens'>Women</NavLink>  {menu === "womens" && <hr />}</li>
        <li onClick={()=>{setMenu("kids")}}> <NavLink style={{textDecoration:'none'}}   to='/kids'>Kids</NavLink>  {menu === "kids" && <hr />}</li>
      </ul>

      <div className='nav-login-cart'>
        <NavLink to='/login'> <button>Login</button> </NavLink>
        <NavLink to='/cart'><img src={cart_icon} alt=''/></NavLink>

        <div className='nav-cart-count'>0</div>
      </div>

    </div>
  )
}

export default Navbar
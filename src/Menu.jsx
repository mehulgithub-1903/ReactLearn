import React from 'react'
import { NavLink } from 'react-router-dom'
const Menu = () => {
    return (
        <div>
         <NavLink style={{textDecoration:"none"}} excat activeClassName="active_class"     to="/About">About us</NavLink>
         <NavLink  style={{textDecoration:"none"}} excat activeClassName="active_class"  to="/contact">Contact Us</NavLink>
        </div>
    )
}

export default Menu

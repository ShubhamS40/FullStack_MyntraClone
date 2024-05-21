import React from 'react'
import { useSelector } from 'react-redux'

import { NavLink,Link } from 'react-router-dom'
function Header() {
    const bagItem=useSelector((store)=>store.bag)
  return (
    
    
    
        <header className=" fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="logo_container">
            <Link href="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
                <span className="material-symbols-outlined action_icon">person</span>
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
                <span className="material-symbols-outlined action_icon">favorite</span>
                <span className="action_name">Wishlist</span>
            </div>

            <Link className="action_container" to="/bag">
                
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bagItem.length}</span>
            </Link>
        </div>
    </header>
    
  )
}

export default Header

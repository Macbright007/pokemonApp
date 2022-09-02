import React from 'react'
import "../components/styles/HeaderPage.css"
import logo from "../images/logo.svg"

const Header = () => {
  return (
    <div className='header__container'>
        <div className='header__top'>
            <img src={logo} alt="logo"/>
            <h1>pokedex</h1>
        </div>
    </div>
  )
}

export default Header
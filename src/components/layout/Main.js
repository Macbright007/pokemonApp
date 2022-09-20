import Header from './Header'
import React from 'react'
import Nav from './Nav'
// import PokemonList from '../pages/PokemonList'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='main__container'>
        <Header />
        <Nav />
        {/* <PokemonList /> */}

        <Outlet />
    </div>
  )
}

export default Main
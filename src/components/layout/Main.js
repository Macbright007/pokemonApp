import Header from './Header'
import React from 'react'
import Nav from './Nav'
import PokemonList from '../pages/PokemonList'

const Main = () => {
  return (
    <div className='main__container'>
        <Header />
        <Nav />
        <PokemonList />
    </div>
  )
}

export default Main
import Header from './Header'
import React from 'react'
import Nav from './Nav'
import PokemonList from '../pages/PokemonList'

const Main = ({pokemons, isloading}) => {
  return (
    <div className='main__container'>
        <Header />
        <Nav />
        <PokemonList pokemons={pokemons} isloading={isloading} />
    </div>
  )
}

export default Main
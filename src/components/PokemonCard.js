import React from 'react'
import logo from "../images/logo.svg"
import "../components/styles/PokemonCard.css"

const PokemonCard = ({pokemon, key}) => {
  return (
    <>
        {
            pokemon.map((pk)=> {
                return (
                    <div className='card__container' key={key}>
                    <img src={pk.sprites.front_default} alt="logo"/>
                    <h5>#00{pk.id}</h5>
                    <h1>{pk.name}</h1>
                    <p>{pk.types[0].type.name}</p>
                    </div>
                )
            })
        }
    </>
  )
}

export default PokemonCard
import React from 'react'

const PokemonFeatures = ({pokemon}) => {
  return (
    <div>
        <div className='features'>
            <p>Height</p>
            <h3>{pokemon.height}</h3>
        </div>
        <div className='features'>
            <p>Weight</p>
            {/* <h3>{pokemon.stats[0].base_stat}</h3> */}
            <h3>{pokemon.weight}</h3>
        </div>
        <div className='features'>
            <p>BMI</p>
            <h3>14.7</h3>
        </div>
    </div>
  )
}

export default PokemonFeatures
import "./pagesStyles/PokemonFeature.css"

const PokemonFeatures = ({pokemon}) => {
  const getBmiValue = (weight, height) => {
       return  (height * 10000) / (weight ** 2)
    }

    const BMI = getBmiValue(pokemon.weight, pokemon.height);
    
  return (
    <div className='feature__cont'>
        <div className='features'>
            <p>Height</p>
            <h3>{pokemon.height}</h3>
        </div>
        <div className='features'>
            <p>Weight</p>
            <h3>{pokemon.weight}</h3>
        </div>
        <div className='features'>
            <p>BMI</p>
            <h3>{BMI.toFixed(1)}</h3>
        </div>
    </div>
  )
}

export default PokemonFeatures
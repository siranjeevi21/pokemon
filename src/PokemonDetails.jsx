import React, { useState, useEffect } from 'react'

const PokemonDetails = ( { url } ) => {
    const [pokemon, setPokemon] = useState({})
    const [pokemonImage, setPokemonImage] = useState("")

    const getDetails = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setPokemon(data)
        setPokemonImage(data.sprites.other.dream_world.front_default)
    }

    useEffect(() => {
        getDetails()
    }, [url])

  return (
    <div className='card'>
        <h1>{pokemon.name}</h1>
        <img src={pokemonImage} alt={pokemon.name} />
    </div>
  )
}

export default PokemonDetails
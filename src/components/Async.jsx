import { useState, useEffect } from 'react'
const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=20'

export const Async = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemon () {
      const response = await fetch(apiURL)
      const data = await response.json()
      
      const pokemonURL = await data.results.map(el => el.url)

      const pokemonData = await Promise.all(
        pokemonURL.map(async el => {
          const res = await fetch(el)
          return res.json()
        })
      )

      const pokemon = pokemonData.map(el => ({
        name: el.name,
        image: el.sprites.front_default,
        type: el.types.map(type => type.type.name).join(', ')
      }))
      
      setPokemons(pokemon)
       
    }
    getPokemon()
  }, [])

  
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className='font-bold mb-4 text-2xl'>Pokémon List</h1>
      <ul className='flex justify-center items-center flex-wrap gap-6'>
        {pokemons?.map(pokemon => (
          <li className='text-center w-40 flex flex-col border border-black' key={pokemon.name}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>Type: {pokemon.type}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

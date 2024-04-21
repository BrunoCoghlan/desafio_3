import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const PokeContext = createContext()

const PokeProvider = ({ children }) => {
  // Estados
  const [pokemon, setPokemon] = useState([])
  // funcion fetch para traer la api
  const getPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0')
      const pokeApi = await response.json()
      setPokemon(pokeApi.results)
    } catch (error) {
      console.log(error)
    }
  }
  // estado useeffect para buscar nombres de pokemon
  useEffect(() => {
    getPokemons()
  }, [])
  // funciones
  // funcion para navigate
  const navigate = useNavigate()
  // funcion capitalizar string
  const capitalizar = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`
  // estados globales
  const globalState = {
    pokemon,
    capitalizar,
    navigate
  }
  return (
    <PokeContext.Provider value={globalState}>
      {children}
    </PokeContext.Provider>
  )
}

export default PokeProvider

import { useContext, useState } from 'react'
import { PokeContext } from '../context/PokeContext'

const PokeSelect = ({ options }) => {
  // llamando al contexto
  const { capitalizar, navigate } = useContext(PokeContext)
  // declaracion de estados
  const [selectValue, setSelectValue] = useState('')
  // funcion value select
  const selectEvent = e => setSelectValue(e.target.value)
  // funcion para navegacion
  const goToPokemon = () => navigate(`/pokemons/${selectValue}`)
  return (
    <>
      <select className='select' value={selectValue} onChange={selectEvent}>
        <option value=''>Encuentra tu Pokemon!</option>
        {options?.map((option) => {
          return (
            <option key={option.name} value={option.name}>
              {capitalizar(option.name)}
            </option>
          )
        })}
      </select>
      <button
        className=' btn btn-primary mt-3'
        disabled={selectValue === ''}
        onClick={goToPokemon}
      >
        Buscar Pokemon
      </button>
    </>

  )
}

export default PokeSelect

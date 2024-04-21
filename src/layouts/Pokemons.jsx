import { useContext } from 'react'
import PokeSelect from '../components/PokeSelect'
import { PokeContext } from '../context/PokeContext'

const Pokemons = () => {
  const { pokemon } = useContext(PokeContext)
  return (
    <div className='container justify-content-center d-grid text-center pt-5'>
      <h2>Selecciona Un Pokemon</h2>
      <PokeSelect options={pokemon} />
    </div>
  )
}

export default Pokemons

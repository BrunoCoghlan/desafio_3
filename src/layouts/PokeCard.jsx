import { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { PokeContext } from '../context/PokeContext'

const PokeCard = () => {
  // invocando al contexto
  const { capitalizar, navigate } = useContext(PokeContext)
  // delcaracion de estados
  const [pokemon, setPokemon] = useState()
  // buscando el pokemon por parametro
  const { name } = useParams()
  // funciones
  // funcion para volver a la pagina de busqueda
  const goToSearchPokemon = () => navigate('/pokemons')
  // funcion asincrona de busqueda
  const getPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const pokeInfo = await response.json()
      setPokemon({
        name: capitalizar(pokeInfo.name),
        url: pokeInfo.sprites.other.home.front_default,
        hp: pokeInfo.stats[0].base_stat,
        attack: pokeInfo.stats[1].base_stat,
        defense: pokeInfo.stats[2].base_stat,
        specialAttack: pokeInfo.stats[3].base_stat,
        specialDefense: pokeInfo.stats[4].base_stat,
        speed: pokeInfo.stats[5].base_stat,
        type: capitalizar(pokeInfo.types[0].type.name)
      })
    } catch (error) {
      console.log(error)
    }
  }
  // useEffect para buscar el pokemon seleccionado
  useEffect(() => { getPokemon() }, [])
  return (
    <div className='container justify-content-center d-grid pt-5'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={pokemon?.url} />
        <Card.Body>
          <Card.Title>{pokemon?.name}</Card.Title>
          <Card.Title>Stats</Card.Title>
          <ul>
            <li>
              Hp : {pokemon?.hp}
            </li>
            <li>
              Ataque : {pokemon?.attack}
            </li>
            <li>
              Defensa : {pokemon?.defense}
            </li>
            <li>
              Ataque Especial : {pokemon?.specialAttack}
            </li>
            <li>
              Defensa Especial : {pokemon?.specialDefense}
            </li>
            <li>
              Velocidad : {pokemon?.speed}
            </li>
          </ul>
          <p><strong>Tipo : </strong>{pokemon?.type}</p>
          <button className='btn btn-primary' onClick={goToSearchPokemon}>Vuelve a buscar otro Pokemon!</button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PokeCard

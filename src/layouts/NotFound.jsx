import { useContext } from 'react'
import { PokeContext } from '../context/PokeContext'

const NotFound = () => {
  const { navigate } = useContext(PokeContext)
  const goToHome = () => navigate('/')
  return (
    <div className='container justify-content-center d-grid pt-5'>
      <h3>Su pagina no ha sido encontrada</h3>
      <button className='btn btn-primary' onClick={goToHome}>volver a Home</button>
    </div>
  )
}

export default NotFound

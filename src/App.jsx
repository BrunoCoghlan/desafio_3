import { Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import { NotFound, Home, Pokemons } from './layouts'

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Pokemons />} path='/pokemons' />
        <Route element={<NotFound />} path='*' />
      </Routes>
    </>
  )
}

export default App

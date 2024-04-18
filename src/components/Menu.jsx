import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Menu = () => {
  const handleIsActive = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'
  return (
    <Navbar data-bs-theme='dark' className='menu'>
      <Container>
        <img src='./src/assets/icons/pokeubicacion.png' alt='icon pokemon gps' />
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink className={handleIsActive} to='/'>Home</NavLink>
            <NavLink className={handleIsActive} to='/pokemons'>Pokemons</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu

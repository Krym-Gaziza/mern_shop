import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  const activeLinkStyle = {
    color: '#ff5733', 
    fontWeight: 'bold', 
  }

  const linkStyle = {
    color: '#ffffff',
  }

  const linkHoverStyle = {
    color: '#ff5733', 
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Narxoz Shop
          </Navbar.Brand>
          <SearchBox />
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
            <Nav>
              <NavLink 
                exact 
                to='/cart' 
                style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)} 
                className='nav-link'
              >
                <i className='fas fa-shopping-cart'></i> Cart
              </NavLink>
              <NavLink 
                exact 
                to='/about-us' 
                style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)} 
                className='nav-link'
              >
                About Us
              </NavLink>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <NavDropdown.Item as={Link} to='/profile'>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavLink 
                  to='/login' 
                  style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)} 
                  className='nav-link'
                >
                  <i className='fas fa-user'></i> Sign In
                </NavLink>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <NavDropdown.Item as={Link} to='/admin/userList'>
                    Users
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/productList'>
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/orderList'>
                    Orders
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

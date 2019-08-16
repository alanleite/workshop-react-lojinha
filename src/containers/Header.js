import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    background-color: #444444;
`

const Menu = styled.div`
    width: 100%;
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    a.active {
        background-color: #777777;
    }
`

const MenuItem = styled(NavLink)`
    padding: 12px 16px;
    display: block;
    text-decoration: none;
    color: white;
`

const Header = () => (
  <Container>
    <Menu>
      <MenuItem
        exact
        to='/'>
        Home
      </MenuItem>
      <MenuItem
        exact
        to='/c/masculino'>
        Masculino
      </MenuItem>
      <MenuItem
        exact
        to='/c/feminino'>
        Feminino
      </MenuItem>
      <MenuItem
        exact
        to='/admin'>
        Admin
      </MenuItem>
      <MenuItem
        exact
        to='/login'
        style={{ marginLeft: 'auto' }}>
        Login
      </MenuItem>
    </Menu>
  </Container>
)

export default Header

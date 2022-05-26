import { Drawer, AppBar } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import ButtonsAdm from '../buttons-adm'
import { ContextUser } from '../../context/user-context'
import { ContextCart } from '../../context/cart-context'
import formatReal from '../../utils/formatReal'
import Nav from './style'

function MenuHamb() {
  const { user } = useContext(ContextUser)
  const { total } = useContext(ContextCart)
  const [menuOpen, setMenuOpen] = useState(false)

  const SignOut = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }
  const onMenuOpen = () => {
    setMenuOpen(true)
  }
  const onMenuClose = () => {
    setMenuOpen(false)
  }
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: '#0C1F2C',
          paddingBlock: 1,
          paddingInline: 5,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <MenuIcon
          fontSize="large"
          onClick={onMenuOpen}
          sx={{ cursor: 'pointer' }}
        />
      </AppBar>
      <Drawer open={menuOpen}>
        <Nav>
          <div className="top-menu">
            <CloseIcon
              onClick={onMenuClose}
              sx={{ color: 'white', cursor: 'pointer', margin: 1 }}
              fontSize="large"
            />
            {total && <h2>{formatReal(total)}</h2>}
          </div>
          {user && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                alignItems: 'center',
              }}
            >
              <h2>Seja bem vindo, {user.name.split(' ')[0]}!</h2>
              {user.isAdm && <ButtonsAdm />}
            </div>
          )}
          <NavLink to="/">Inicio</NavLink>
          {user ? (
            <a onClick={SignOut}>Sair</a>
          ) : (
            <NavLink to="/login">Entrar</NavLink>
          )}
          <NavLink to="/sigin">Cadastrar</NavLink>
          <NavLink to="/checkout">Carrinho</NavLink>
        </Nav>
      </Drawer>
    </>
  )
}

export default MenuHamb

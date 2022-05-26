import { AppBar, useMediaQuery } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'

import Nav from './style'
import ButtonsAdm from '../buttons-adm'
import { ContextUser } from '../../context/user-context'
import { ContextCart } from '../../context/cart-context'
import formatReal from '../../utils/formatReal'
import MenuHamb from '../menu-hamburguer'

function Header() {
  const { user } = useContext(ContextUser)
  const { total } = useContext(ContextCart)
  const mediaQuery = useMediaQuery('(max-width:820px)')

  const SignOut = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <>
      {mediaQuery ? (
        <MenuHamb />
      ) : (
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
          <Nav>
            <NavLink to="/">Inicio</NavLink>
            {user ? (
              <a onClick={SignOut}>Sair</a>
            ) : (
              <NavLink to="/login">Entrar</NavLink>
            )}
            <NavLink to="/sigin">Cadastrar</NavLink>
            <NavLink to="/checkout">Carrinho</NavLink>
            {total && <h2>{formatReal(total)}</h2>}
          </Nav>
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
        </AppBar>
      )}
    </>
  )
}

export default Header

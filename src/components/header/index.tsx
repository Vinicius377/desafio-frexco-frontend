import { AppBar } from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'
import { useContext } from 'react'

import Nav from './style'
import ButtonsAdm from '../buttons-adm'
import { ContextUser } from '../../context/user-context'
import { ContextCart } from '../../context/cart-context'
import formatReal from '../../utils/formatReal'

function Header() {
  const { user } = useContext(ContextUser)
  const { total } = useContext(ContextCart)

  const SignOut = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }
  return (
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
          <button onClick={SignOut}>Sair</button>
        ) : (
          <NavLink to="/login">Entrar</NavLink>
        )}
        <NavLink to="/sigin">Cadastrar</NavLink>
        {total && <h2>R$ {formatReal(total)}</h2>}
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
  )
}

export default Header

import { AppBar } from '@mui/material'
import { NavLink, BrowserRouter } from 'react-router-dom'
import Nav from './style'
import ButtonsAdm from '../buttons-adm'

function Header() {
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
        <NavLink to="/login">Entrar</NavLink>
        <NavLink to="/sigin">Cadastrar</NavLink>
      </Nav>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          alignItems: 'center',
        }}
      >
        <h2>Seja bem vindo,Usuário!</h2>
        <ButtonsAdm />
      </div>
    </AppBar>
  )
}

export default Header

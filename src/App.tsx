import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import PostProduct from './pages/PostProduct'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Inicio</h1>}></Route>
            <Route path="/login" element={<h1>Entrar</h1>}></Route>
            <Route path="/sigin" element={<h1>Cadastro de conta</h1>}></Route>
            <Route path="/stock" element={<h1>Estoque</h1>}></Route>
            <Route path="/createproduct" element={<PostProduct />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App

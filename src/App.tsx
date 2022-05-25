import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Signin from './pages/Signin'
import Header from './components/header'
import PostProduct from './pages/PostProduct'
import Home from './pages/Home'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<h1>Entrar</h1>}></Route>
            <Route path="/sigin" element={<Signin />}></Route>
            <Route path="/stock" element={<h1>Estoque</h1>}></Route>
            <Route path="/createproduct" element={<PostProduct />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App

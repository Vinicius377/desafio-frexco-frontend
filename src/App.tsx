import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/header'

import Signin from './pages/Signin'
import PostProduct from './pages/PostProduct'
import Home from './pages/Home'
import Stock from './pages/Stock'
import Login from './pages/Login'
import Checkout from './pages/Checkout'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/sigin" element={<Signin />}></Route>
            <Route path="/stock" element={<Stock />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/createproduct" element={<PostProduct />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App

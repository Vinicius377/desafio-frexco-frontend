import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>}></Route>
          <Route path="/login" element={<h1>Entrar</h1>}></Route>
          <Route path="/sigin" element={<h1>Cadastro de conta</h1>}></Route>
          <Route path="/stock" element={<h1>Estoque</h1>}></Route>
          <Route
            path="/createproduct"
            element={<h1>Cadastro de produto</h1>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

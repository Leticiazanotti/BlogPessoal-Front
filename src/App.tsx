import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario"
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import ListaTemas from "./components/temas/listatema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import CadastroPostagem from "./components/postagens/cadastroPostagens/CadastroPostagem";
import DeletarPostagens from "./components/postagens/deletarPostagens/DeletarPostagens";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTemas />} />
          <Route path="/postagens" element={<ListaPostagem />} />
          <Route path='cadastroTema' element={<CadastroTema />} />
          <Route path='editarTema/:id' element={<CadastroTema />} />
          <Route path='apagarTema/:id' element={<DeletarTema />} />
          <Route path='cadastroPost' element={<CadastroPostagem />} />
          <Route path='editarPostagem/:id' element={<CadastroPostagem />} />
          <Route path='deletarPostagem/:id' element={<DeletarPostagens />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;


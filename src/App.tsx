import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario"
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import "./App.css";
import ListaTemas from "./components/temas/listatema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";

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
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

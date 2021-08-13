import React, { useState } from "react";

function App(props) {
  const [usuario, setUsuario] = useState("Gama Academy")
  return (
    <>
    <p>{usuario}</p>
      <input name= "usuario" id= "usuario" classname = "usuarioInput" placeholder="Usuário" />
      <button>Pesquisar</button>
    </>
    );
}

export default App;

// [usuario, setUsuario]
import React, { useState } from "react";

function App(props) {
  const [usuario, setUsuario] = useState("");
  return (
    <>
    <p>{usuario}</p>
      <input classname = "usuarioInput" placeholder= "Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <button type="button">Pesquisar</button>
    </>
    );
}

export default App;

// [usuario, setUsuario]
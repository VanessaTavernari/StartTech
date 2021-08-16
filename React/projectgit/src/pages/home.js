import React, { useState } from "react";
import axios from "axios";
import * as S from './styled-home';

function App(props) {
  const [usuario, setUsuario] = useState("");
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }

  return (
    <S.Container>
    {/* <p>{usuario}</p> */}
      <S.Input classname = "usuarioInput" placeholder= "Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
    );
}

export default App;
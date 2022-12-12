import React, { useState } from 'react'
import './App.css';
import Etapa1 from './componentes/Etapa1'
import Etapa2 from './componentes/Etapa2'
import Etapa3 from './componentes/Etapa3'
import EtapaFinal from './componentes/EtapaFinal';
import styled, { StyledComponent } from "styled-components";

// Seletor

function SeletorPagina (){
const [seletor, setTrocaEtapa] = useState(1)

  switch (seletor) {
    case 1: return <Etapa1 />
    case 2: return <Etapa2 />
    case 3: return <Etapa3 />
    case 4: return <EtapaFinal />
  }
}


function App() {



  return (
    <div>
      <button>Próxima etapa</button>
      <Etapa1 />

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Etapa1 from './componentes/Etapa1'
import Etapa2 from './componentes/Etapa2'
import Etapa3 from './componentes/Etapa3'
import EtapaFinal from './componentes/EtapaFinal';
import styled, { StyledComponent } from "styled-components";



function App() {
  return (
    <div>      
      <button>Próxima etapa</button>
      <Etapa1/>
      <Etapa2/>
    </div>
  );
}
export default App;

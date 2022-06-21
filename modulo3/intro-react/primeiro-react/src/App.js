import logo from './logo.svg';
import nei from './Neijr.png';
import './App.css';

function App() {
  function mensagem (){
    alert ('Boa noite professores')
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá eu sou o Nei</h1>
        <img src={nei} className="App-logo" alt="logo" />
        <p>
        Meu senhor nos proteja do React!
        </p>
      <button onClick={mensagem}> Clique aqui para Boa noite</button>
      </header>
    </div>
  );
}

export default App;

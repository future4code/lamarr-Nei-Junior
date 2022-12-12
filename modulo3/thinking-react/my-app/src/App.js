import logo from './logo.svg';
import './App.css';
import React from 'react'
import Componente from './mockDeDados.js'

const produtos = [

  {
      id: 1,
      name: 'Produto legal 1',
      price: 123,
      photo: 'https://picsum.photos/200/200?a=1',
  },
  {
      id: 2,
      name: 'Produto legal 2',
      price: 123,
      photo: 'https://picsum.photos/200/200?a=1',
  },
  {
      id: 3,
      name: 'Produto legal 3',
      price: 123,
      photo: 'https://picsum.photos/200/200?a=1',
  },
  {
      id: 4,
      name: 'Produto legal 4',
      price: 123,
      photo: 'https://picsum.photos/200/200?a=1',
  },
  {
      id: 5,
      name: 'Produto legal 5',
      price: 123,
      photo: 'https://picsum.photos/200/200?a=1',
  },
  {
      id: 6,
      name: 'Produto legal 6',
      price: 123,
      photo: 'https://picsum.photos/200/200?a=1',
  }

]



produtos.map((index, item) =>{
return produtos})


function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;

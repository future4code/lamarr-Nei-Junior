import React from 'react';
import Post from './components/Post/Post';
import './style.css'

function App() {

const transfArray = [
  {
    nomeUsuario: 'paulinha',
    fotoUsuario: 'https://picsum.photos/50/50',
    fotoPost: 'https://picsum.photos/200/150',
  },
  {
    nomeUsuario: 'rafael',
    fotoUsuario: 'https://picsum.photos/50/50',
    fotoPost: 'https://picsum.photos/200/150',
  },
  {
    nomeUsuario: 'sarah',
    fotoUsuario: 'https://picsum.photos/50/50',
    fotoPost: 'https://picsum.photos/200/150',
  }
]

const mapeandoArray = transfArray.map((post, index) => {


  return (
      <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
  )

})


  return <li>{mapeandoArray}</li>
}
export default App;

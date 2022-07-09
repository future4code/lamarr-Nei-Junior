import React, { useState } from 'react';
import Post from './components/Post/Post';
import './style.css'



function App() {<>

<input
placeholder='Nome'
value={inputName}
onChange={handleInputName} 
/>

<input
placeholder='Foto'
value={inputfoto}
onChange={handleInputFoto} 
/>

<button onClick={addPost} />


const handleInputName = (e) => { 
setName(e.target.value)
}
const handleInputFoto = (e) => {
setForo(e.target.value)
}


</>

const [inputName, setName] = useState("")
const [inputfoto, setForo] = useState("")
const [transfArray, setPost ] = useState ([
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
])

const addPost = () =>{
const novoPost = {nomeUsuario:inputName,fotoUsuario:inputfoto}
const novaListaPosts = [... transfArray, novoPost]
setPost(novaListaPosts)

}

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

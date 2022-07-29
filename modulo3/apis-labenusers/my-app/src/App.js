import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'


function App() {
  const [myList, setMylist] = useState([])
  const [myInputName, setMyInputName] = useState("")
  const [myInputEmail, setMyInputEmail] = useState("")


  //    LIDANDO COM INPUTS
  const atualizandoNome = (event) =>{
    setMyInputName(event.target.value)
  }
    const atualizandoEmail = (event) =>{
      setMyInputName(event.target.value)
  }

  //    RENDERIZANDO
  const componentLista = myList.map((item, index) => {
    return <div key={index}> {item}
    </div>
  })

  useEffect(() => {
    getUser()
  },[])

  //      AXIOS
  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
  const myHeader = {
    headers: {
      Authorization: "nei-tavares-lammar"
    }
  }

  //      GET
  const getUser = () => {
    axios.get(url, myHeader)
      .then((retorno) => {
        console.log(retorno.data)
      })
  }

  //    POST
  const body = {
    name: myInputName
  }

  const postUser = (event) => {
    event.preventDefault()
    axios.post(url, body, myHeader)
    .then(() => {
      getUser()
      alert ("Tudo certo")
    })
    .catch(() => {
      alert ("Algo deu errado")
    })
  }
getUser()

  return (
    <div>
      <h1>My Lista
        {componentLista}
      </h1>
      <input type='text' value={myInputName} onChange= {atualizandoNome}></input>
      <input type='text' value={myInputEmail} onChange= {atualizandoEmail}></input>

      <button onClick={postUser}>Adicionar</button>
    </div>
  );
}

export default App;

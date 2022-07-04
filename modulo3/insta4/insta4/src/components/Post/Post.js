import React, { useState } from 'react'
import './style.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { getByLabelText } from '@testing-library/react'



function Post(props) {

  const [numeroCurtidas, setnumeroCurtidas] = useState(0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)



  const onClickCurtida = () => {

    if (!curtido) {
      (setCurtido(true)); setnumeroCurtidas(numeroCurtidas + 1)
    }
    else if (curtido) {setCurtido(false); setnumeroCurtidas(numeroCurtidas - 1) }
    console.log('Curtiu!')
  }

  const onClickComentario = () => {
    setComentando(!comentando)
    if (comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} />
    }
    console.log(comentando)
  }

  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
    setInputComentario('')
  }

  let iconeCurtida

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }

  let componenteComentario

  let [inputComentario, setInputComentario] = useState('')

  let handleInputComentario = (event) => {
    setInputComentario(event.target.value)
  }

  if (comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} onChangeComentario={handleInputComentario} value={inputComentario}/>
  }

  return (
    <div className='PostContainer'>
      <div className='PostHeader'>
        <img className='UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </div>

      <img className='PostPhoto' src={props.fotoPost} alt={'Imagem do post'} />

      <div className='PostFooter'>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
                <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  )
}


export default Post
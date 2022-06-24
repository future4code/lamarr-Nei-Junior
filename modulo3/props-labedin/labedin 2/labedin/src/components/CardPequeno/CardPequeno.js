import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <div className='email'>
                <img src={props.imagem} />
                Email: {props.email}
            </div>
            <div className='endereço'>
                <img src={props.imagem2} />
                Endereço: {props.endereço}
            </div>
        </div>
    )
}
export default CardPequeno;

import React, { useState } from 'react'
import "./CardMatch.css"
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import CheckIcon from '@mui/icons-material/Check';

function CardMatch() {

    const [pessoa, setPessoa] = useState([
        {
            nome: 'Marco',
            url: <img src='https://img.freepik.com/fotos-gratis/sorrindo-mulher-preta-fazendo-gesto-de-moldura_1262-6249.jpg?w=1060&t=st=1659487532~exp=1659488132~hmac=21fdee501579eb6171bddbf71dcac3133aef3502b580c60741ed26e2860beffb' alt='' />

        },
        {
            nome: 'Marco',
            url: <img src='https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000' alt='' />
        }
    ])



    return (

        <div className='styleCard'>
            {pessoa.map((pessoa) => (
                <div className='card'>
                    <h2>{pessoa.nome}</h2>
                    {pessoa.url}
                    <div className='icons'><NotInterestedIcon fontSize="large" className='not'/>
                    <CheckIcon fontSize="large" className='yes'/></div>
                </div>

            ))}
        </div>
    )
}

export default CardMatch
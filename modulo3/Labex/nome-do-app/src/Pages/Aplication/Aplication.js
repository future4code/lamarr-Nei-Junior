import React from 'react'
import {useNavigate} from "react-router-dom";


function Aplication() {
    let navigate = useNavigate()
    return (
        <div>Aplication
            <button onClick={() => { navigate("/") }}>VOLTAR PARA HOME</button>
        </div>
    )
}

export default Aplication
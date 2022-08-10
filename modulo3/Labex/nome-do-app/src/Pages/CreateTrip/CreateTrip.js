import React from 'react'
import { useNavigate } from "react-router-dom";


function CreateTrip() {
    let navigate = useNavigate()
    return (
        <div>CreateTrip
            <button onClick={() => { navigate("/") }}>VOLTAR PARA HOME</button>
        </div>
    )
}

export default CreateTrip
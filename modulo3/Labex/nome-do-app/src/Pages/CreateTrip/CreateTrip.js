import React from 'react'
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../../Constants/constant';


function CreateTrip() {
    let navigate = useNavigate()
    return (
        <div>CreateTrip
            <button onClick={() => { navigate("/") }}>VOLTAR PARA HOME</button>
            {console.log(BASE_URL)}
        </div>
    )
}

export default CreateTrip
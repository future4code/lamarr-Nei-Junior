import React from 'react'
import { useNavigate } from "react-router-dom";


function ListTrips() {
    let navigate = useNavigate()

    return (
        <div>ListTrips
            <button onClick={() => { navigate("/") }}>VOLTAR PARA HOME</button>
        </div>
    )
}

export default ListTrips
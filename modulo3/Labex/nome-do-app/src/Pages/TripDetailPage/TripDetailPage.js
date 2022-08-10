import React from 'react'
import { useNavigate } from "react-router-dom";


function TripDetailPage() {
    let navigate = useNavigate()
    
    return (
        <div>TripDetailPage
            <button onClick={() => { navigate("/") }}>VOLTAR PARA HOME</button>
        </div>
    )
}

export default TripDetailPage
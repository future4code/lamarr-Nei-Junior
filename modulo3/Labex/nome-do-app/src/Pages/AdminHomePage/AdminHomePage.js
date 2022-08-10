import React from 'react'
import {useNavigate} from "react-router-dom";


function AdminHomePage() {
    let navigate = useNavigate()
    return (
        <div>AdminHomePage
            <button onClick={() => { navigate("/") }}>VOLTAR PARA HOME</button>
        </div>
    )
}

export default AdminHomePage
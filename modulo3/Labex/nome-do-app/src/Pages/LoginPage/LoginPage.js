import React from 'react';
import {useNavigate} from "react-router-dom";

function LoginPage() {
    let navigate = useNavigate()
    return (
        <div>LoginPage
            <button onClick={()=>{navigate("/")}}>VOLTAR PARA HOME</button>
        </div>
    )
}

export default LoginPage
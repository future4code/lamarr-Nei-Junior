import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Butoes from '../GlobalStyle';
import { AreaTotal, AreaDeLogin, LabelEIcon } from './style';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import axios from 'axios';
import { useForm } from '../../hooks/useForm';

function LoginPage() {

    const [form, onChange, clear] = useForm({ email:"", password:""})

    const fazerLogin = (event) =>{
        event.preventDefault()

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/login", form)
        .then ((response)=> console.log(response.data))
        .catch((error)=> console.log(error.message))

        clear()
    }

    let navigate = useNavigate()
    return (
        <AreaTotal>
            <AreaDeLogin><p>TripWorld</p>
                <form onSubmit={fazerLogin}>
                <label htmlFor='usuario'>Seu usuário </label>
                <LabelEIcon><AccountCircleIcon />
                    <input
                        placeholder="email"
                        type="text"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        required
                    />

                </LabelEIcon>
                <label>Sua senha </label>
                <LabelEIcon><HttpsIcon />
                    <input placeholder="Password"
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        required
                    />

                </LabelEIcon>
                </form>
                <Butoes onClick={fazerLogin}>LOGAR</Butoes>
            </AreaDeLogin>
        </AreaTotal>
    )
}

export default LoginPage
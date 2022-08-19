import React, { useState, useEffect } from "react";
import axios from "axios";
import { ButtonLimpa, ButtonCor, Buttons2, ButtonNo, Buttons, ButtonYes, MatchCard } from "./style";
import styled from "styled-components";
import Matches from "../Matches/Matches";

// ------------------------------------------------- MONTANDO O ARRAY

function Home(props) {

    const [perfil, setPerfil] = useState([])
    const { changePage } = props


    useEffect(() => {
        getProfileToChoose()
    }, [])

    // ------------------------------------------------ESTADO




    // ---------------------------------------------- CLEAR 

    const clear = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-resende/clear')
            .then(() => {
                alert("Tente o Amor novamente, Matches renovados")
                getProfileToChoose()
            }).catch(() => {
                alert("Ops deu erro.")
            })
    }

    // -------------------------------------------------GET 

    const getProfileToChoose = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-resende/person`)
            .then((response) => {
                if (response.data.profile === null) {
                    setPerfil([])
                } else {
                    setPerfil([response.data.profile])
                }
            }).catch(
                (erro) => {
                    console.log(erro.response);
                })
    }

    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const choosePerson = (id, choice) => {
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-resende/choose-person`,
            {
                'id': id,
                'choice': choice
            },
            headers)
            .then(() => {
                getProfileToChoose()
            }).catch(() => {
                alert("Erro!")
            })
    }

    // -------------------------------------------------- RENDERIZA


    const card = perfil.map((profile) => {
        return (
            <MatchCard style={{ backgroundImage: `url(${profile.photo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} key={profile.id}>
                <div>
                    <h1>{profile.name}, {profile.age}</h1>
                    <p>{profile.bio}</p>
                </div>
            </MatchCard>
        )
    })

    // ------------------------------------------- RENDERIZAÇÃO DA PAGINA EM SI

    return (
        <>
            {card}
            <Buttons>
                <ButtonNo onClick={() => choosePerson(perfil[0].id, false)}>X</ButtonNo>
                <ButtonYes onClick={() => choosePerson(perfil[0].id, true)}>V</ButtonYes>
            </Buttons>
            <Buttons2>
                <ButtonCor onClick={clear} >Limpar Matches</ButtonCor>
                <ButtonCor onClick={() => { changePage("Matches") }}> Ver meus Matches! </ButtonCor>
            </Buttons2>
        </>
    );
}

export default Home;

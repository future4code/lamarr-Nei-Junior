import React, { useState, useEffect } from "react";
import axios from "axios";
import { ButtonCor, CardLike, Icons, Match } from "./style";
import styled from "styled-components";
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';

function Matches(props) {

    const [likes, setLikes] = useState([])
    const { changePage } = props
    const rendPage = props
    useEffect(() => {
        getMatches()
    }, [])

    // -------------------------------  GET

    const getMatches = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-resende/matches`)
            .then((response) => {
                setLikes(response.data.matches)
            }).catch(
                (erro) => {
                    console.log(erro.response);
                })
    }

    // ------------------------------------- RENDERIZA

    const list = likes.map((profile) => {
        return (
            <CardLike>
                <img src={profile.photo} alt={profile.alt_photo} />
                <span>{profile.name}</span>
                <Icons><PhoneIcon /><ChatIcon /><VoiceChatIcon /></Icons>

            </CardLike>)
    })


    return (

        <div>
            <h2>Meus Matches</h2>
            <Match>
                {list}
            </Match>
            <ButtonCor onClick={() => { changePage("homepage") }}>Voltar para Home</ButtonCor>
        </div>
    )
}

export default Matches
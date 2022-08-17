import React from 'react'
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../../Constants/constant';
import useRequestData from '../../hooks/useRequestData';
import axios from "axios";
import { Travel, TripDIV, TripList } from './style';
import { TripPage } from './style';


function ListTrips() {
    let navigate = useNavigate();

    const [dataTripList, isLoadingUser, errorUser] = useRequestData(`${BASE_URL}trips`)
    const tripList = dataTripList && dataTripList.trips.map((trips) => {

        return <TripList>
            <Travel>
                <center><h4><b>{trips.name}</b></h4><br></br></center>
                <img src={"https://img.olhardigital.com.br/wp-content/uploads/2021/08/shutterstock_1921824401-1-695x500.jpg"} alt="logo" />
                <br></br>
                <span><b>Planeta:</b> {trips.planet} <br></br></span>
                <span><b>Descrição:</b> {trips.description}<br></br></span>
                <span><b>Duração da Viagem:</b> {trips.durationInDays} anos luz</span>
            </Travel>
        </TripList>
    })


    return (
        <TripPage>
            {console.log(BASE_URL)}
            {tripList}
            <button onClick={() => { navigate("/") }}>VOLTAR PARA HOME</button>
        </TripPage>

    )
}

export default ListTrips
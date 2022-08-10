import logo from './logo.svg';
import React from "react";
import './App.css';
import styled from 'styled-components'
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import AdminHomePage from './Pages/AdminHomePage/AdminHomePage';
import Aplication from './Pages/Aplication/Aplication';
import CreateTrip from './Pages/CreateTrip/CreateTrip';
import ListTrips from './Pages/ListTrips/ListTrips';
import TripDetailPage from './Pages/TripDetailPage/TripDetailPage';
import LoginPage from './Pages/LoginPage/LoginPage';

const Nav = styled.div`
display: flex;
justify-content: space-around;
background-color: black;
color: white;
text-decoration: none;
`



function App() {
  return <div>

    <Router>
      <Link to="/admin">Admin</Link>
      <Link to="/aplication">Aplicação</Link>
      <Link to="/trips">Planejar Viagem</Link>
      <Link to="/triplist">Lista de Viagens</Link>
      <Link to="/tripdetail">Detalhes da Viagem</Link>
      <Link to="/login">Login</Link>
      
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/admin' element={<AdminHomePage />}></Route>
        <Route path='/aplication' element={<Aplication />}></Route>
        <Route path='/trips' element={<CreateTrip />}></Route>
        <Route path='/triplist' element={<ListTrips />}></Route>
        <Route path='/tripdetail' element={<TripDetailPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </Router>
  </div>

}

export default App;

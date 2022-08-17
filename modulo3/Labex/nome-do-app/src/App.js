import logo from './logonovo.png';
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
import { FaBars } from 'react-icons/fa'
import { Bars, NavBtn } from './Pages/LoginPage/style';

const Nav = styled.div`
width: 100vw;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: white;
gap: 30px;
color: black;
text-decoration: none;
align-items: center;
height: 14vh;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  a{
    text-decoration: none;
  }
  img{
    height: 80%;
  }
  
`


const StyledLink = styled(Link)`
display: flex;
text-decoration: none;
color: black;
margin-left: 50px;
font-family: 'Aboreto', cursive;
font-size: 14px;
font-weight: 900;
transition: color .3s ease-in-out, box-shadow .3s ease-in-out;

  img{
    height: 10%;
  }
  :hover{
    color: blue;

  }
    @media screen and (max-width:768px) {
    display: none
}
`
const NavBtnLink = styled(Link)`
border-radius: 4px;
margin-left: 200px;
color: white;
background-color: black;
padding: 10px 22px;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
  :hover{
    transition: all 0.2s ease-in-out;
    background-color: gray;
  }
`




function App() {
  return <Router>
    <Nav>
      <Link to="/"> <img src={logo} alt="logo" /></Link>
      <Bars onClick={""}></Bars>
      <StyledLink to="/admin">Admin</StyledLink>
      <StyledLink to="/aplication">Aplicação</StyledLink>
      <StyledLink to="/trips">Planejar Viagem</StyledLink>
      <StyledLink to="/triplist">Lista de Viagens</StyledLink>
      <StyledLink to="/tripdetail">Detalhes da Viagem</StyledLink>
      <NavBtn>
        <NavBtnLink to="login">LOGIN</NavBtnLink>
      </NavBtn>
    </Nav>

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

}

export default App;

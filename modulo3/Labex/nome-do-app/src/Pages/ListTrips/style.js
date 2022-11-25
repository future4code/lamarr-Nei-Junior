import styled from "styled-components";


export const TripList = styled.li`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
margin-bottom: 20px;

`

export const TripPage = styled.div`

padding-top: 50px;
width: 100vw;
display:flex;
justify-content: center;
flex-direction: row;
gap: 40px;
background-image: url("https://img.freepik.com/free-vector/gradient-galaxy-background_23-2148983655.jpg");
background-size: 100%;
flex-wrap: wrap;
    h2{
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`

export const Travel = styled.div`
box-sizing: border-box;
border: 1px solid white;
width: 25vw;
background-color: white;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
padding-bottom: 20px;
transition:all .5s ease-in-out;
cursor: pointer;


    img{
        width: 100%;
        height: 20vh;
        border-radius: 20px;
    }

    span{
        margin-left: 20px;
        margin-top: 10px;
    }

    
    :hover{
        transition:all .5s ease-in-out;
        box-shadow: 0 0 0 0 #fff inset, skyblue 0 0 0 3px;
    }

`
import styled from "styled-components";


export const Buttons2 = styled.div`
margin-top: 50px;
display:flex;
flex-direction: column;
margin-bottom: 50px;
justify-content: center;
align-items: center;
`

export const ButtonCor = styled.button`
    font-family: 'Permanent Marker', cursive;
    background-color:indianred;
    margin-bottom: 20px;
    width: 500px;
    grid-gap: 8px;
    align-items: center;
    border: 1px solid #000;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;                           
    flex-shrink: 0;
    font-size: 18px;
    gap: 8px;
    justify-content: center;
    line-height: 1.5;
    padding: 12px 16px;
    text-overflow: ellipsis;
    transition: all .14s ease-out;
    white-space: nowrap;
                    :hover {
                        box-shadow: 4px 4px 0 #000;
                        transform: translate(-4px,-4px);
                    }
                    :focus-visible{
                        outline-offset: 1px;
                    }
                

`

export const ButtonLimpa = styled.button`
font-family: 'Permanent Marker', cursive;
margin-top: 40px; 
font-size: 20px;
cursor: pointer;
background-color:darkcyan;
border-radius: 20%;
padding: 20px;
margin-bottom: 50px ;
color: white;

    :hover{
        background: white;
        color: black;
        transition: 0.5s;
    }`

export const Buttons = styled.div`
    display: flex;
    margin-bottom: 500px;
    margin-top: 50px;
    margin-left: 500px;
    margin-right: 500px;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
    `

export const ButtonNo = styled.button`
        font-family: 'Permanent Marker', cursive;
        background: transparent;
        cursor: pointer;
        border: 2px solid red;
        border-radius: 50%; 
        padding: 18px 18px;
        color: red;
        font-size: 30px;

        :hover {
            transition: 0.5s;
            background-color: red;
            color: white;
        }

`

export const ButtonYes = styled.button`
        font-family: 'Permanent Marker', cursive;
        font-size: 30px;
        background: transparent;
        cursor: pointer;
        border-radius: 50%;
        border: 2px solid green;
        padding: 18px 18px;
        color: green;

        :hover {
            transition: 0.5s;
            background-color: green;
            color: white;
        }
`

export const MatchCard = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    width: 40%;
    height: 400px;
    margin: auto;
    margin-top: 50px;
    border-radius: 80px;
    color: white;
    justify-content: flex-end;

    div {
        display: flex;
        flex-direction: column;
        margin: 15px;
    }

    h1 {
        margin-bottom: 5px;
        font-size: 32px;
        text-shadow: 0 0 6px black;
    }

    p {
        font-size: 22px;
        text-shadow: 0 0 3px black;
    }



`
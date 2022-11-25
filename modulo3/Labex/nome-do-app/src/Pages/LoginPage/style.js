import styled from "styled-components";
import { FaBars } from 'react-icons/fa'


export const LabelEIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;

gap:10px;
`

export const AreaTotal = styled.div`
width: 100%;
height: 86vh;
display: flex;
background-image: linear-gradient(to right, #434343 0%, black 100%);
justify-content: center;
align-items: center;
`

export const AreaDeLogin = styled.div`
display: flex;
justify-content: center;
border-radius: 20px;
align-items: center;
flex-direction: column;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
width: 35vw;
height: 59vh;
border: 2px, solid black;

@media screen and (max-width:768px) {
width: 350px;
}


    form {
        flex-wrap: wrap;
        width: 33vw;
    }
    
    input{
        flex-wrap: wrap;
        margin-top: 7px;
        height: 6vh;
        margin-bottom: 20px;
        box-shadow: inset #abacaf 0 0 0 2px;
                    border: 0;
                    background: rgba(0, 0, 0, 0);
                    appearance: none;
                    width: 40%;
                    position: relative;
                    border-radius: 3px;
                    padding: 9px 12px;
                    line-height: 1.4;
                    color: rgb(0, 0, 0);
                    font-size: 16px;
                    font-weight: 400;
                    height: 30px;
                    transition: all .2s ease;
                    :hover{
                        box-shadow: 0 0 0 0 #fff inset, skyblue 0 0 0 2px;
                    }
                    :focus{
                        background: #fff;
                        outline: 0; 
                        box-shadow: 0 0 0 0 #fff inset, skyblue 0 0 0 3px;
                    }
                    @media screen and (max-width:768px) {
width: 200px;
}
                
    }
    button{
        width: 15vw;
        padding: 15px;
        margin-bottom: 50px;
        margin-top: 10px;
    }
    label{
        margin-left: 160px;
        margin-bottom: 100px;
    }
    p{
        font-size: 26px;
    }
`

export const Bars = styled(FaBars)`
display: none;
color: black;

@media screen and (max-width:768px) {
    display: block;
    position: absolute;
    margin-top: 12px;
    margin-right: 10px ;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width:768px) {
    display: none
}
`



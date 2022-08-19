import styled from "styled-components";

export const Icons = styled.div`
display:flex;
flex-direction:row;
margin-bottom: 50px;
align-items: center;
justify-content: center;
gap: 7px;
`

export const Match = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

        img{
            border-radius:100%;
            width: 200px;
            height: 200px;
            box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
            margin-bottom: 10px;

        }
        span{
            font-family: 'Permanent Marker', cursive;
            font-size: 20px;
        }`

export const CardLike = styled.div`
display: flex;
flex-direction: column;`

export const ButtonCor = styled.button`
    font-family: 'Permanent Marker', cursive;
    margin-bottom: 200px;
    background-color:lightpink;
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
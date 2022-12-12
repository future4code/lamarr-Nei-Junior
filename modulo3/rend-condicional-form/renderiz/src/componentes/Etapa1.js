import React from "react";
import styled, { StyledComponent } from "styled-components";


export default function Etapa1() {
    return (
        <div>
            <h2>1. Qual seu nome?</h2>
            <input type="text" placeholder="Seu Nome" id="fname" name="fname" />
            <h2>2. Qual sua idade?</h2>
            <input type="text" placeholder="Sua idade" id="fname" name="fname" />
            <h2>2. Qual seu email?</h2>
            <input type="text" placeholder="Seu email" id="fname" name="fname" />
            <h2>2. Qual sua escolaridade?</h2>
            <input type="text" placeholder="Sua escolaridade" id="fname" name="fname" />
            <select>
                <option value="1">Superior Incompleto</option>
                <option value="2" selected>Superior Completo</option>
                <option value="3">Médio</option></select>
        </div>)
}
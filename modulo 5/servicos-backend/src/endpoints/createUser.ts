import { connection } from './../data/connection';
import { Request, Response } from 'express';
import getCep from '../services/getCep';


export async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const { CEP, Logradouro, Número, Complemento, Bairro, Cidade, Estado } = req.body
        if (!CEP || !Logradouro || !Número || !Complemento || !Bairro || !Cidade || !Estado) {
            res.statusCode = 422
            throw "você não preencheu algum campo"
        
    }
    const usuario = await getCep(CEP)
    const newUser = {usuario, Logradouro, Número, Complemento, Bairro, Cidade, Estado}
    await connection("AulaExercicio").insert(newUser)

    res.status(200).send("Usuário Criado")
    
}
    catch (error:any) {

    }
}
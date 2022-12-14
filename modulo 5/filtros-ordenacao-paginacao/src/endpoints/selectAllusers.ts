import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectAllUsers(req: Request, res: Response): Promise<any> {

    let statusCode = 400

    try {
        let name = req.query.name
        let email = req.query.email as string
        let type = req.params.type as string
        let sort = req.query.sort as string
        let order = req.query.sort as string 

        if (!name) {
            name = "%"
        }
        if (!sort) {
            sort = "email"
        }
        if (!order) {
            order = "ASC"
        }


        const result = await connection("aula48_exercicio")
            .where("name", "like", `%${name}%`)
            .orWhere("type", "like", `%${type}`)
            .orderBy(sort, order)
            .limit(5)
            
        
            if (result.length < 1) {
            statusCode = 404
            res.status(400).send("Nenhum usuário encontrado")
        }
        res.status(200).send(result)

    }
    catch (err) {
        res.status(statusCode).send(err)
    }
}


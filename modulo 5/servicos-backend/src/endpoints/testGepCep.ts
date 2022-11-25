import { Response, Request } from "express";
import getCep from "../services/getCep";

async function testCep(req: Request, res: Response) {
    const { cep } = req.body

    if (!cep) {
        res.statusCode = 422
        throw new Error("Cep é Obrigatório")
    }
    const result = await getCep(cep)
    console.log(result)
    res.status(201).send(result)
}
export default testCep
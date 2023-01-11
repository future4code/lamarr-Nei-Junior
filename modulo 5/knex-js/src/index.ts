import express from 'express'
import { Request, Response } from 'express';
import connection from './database/connection';


import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())


app.get("/user", async (req: Request, res: Response): Promise<void> => {
    const id = req.query.id
    const name = req.query.name
    let result
    try {
        if (name) {
            result = await connection.raw(
            `
            SELECT * from Actor
            WHERE name= "${name}"
            `
            )
        }
        else {

            result = await connection.raw(
                `
                SELECT * from Actor
                `
                )
        }
        res.status(200).send(result[0])
    }
    catch(err:any){
        console.log(err.message);
    }
    
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
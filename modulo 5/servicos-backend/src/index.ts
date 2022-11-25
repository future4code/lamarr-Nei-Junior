import express from "express"

import cors from 'cors'
import getCep from "./services/getCep"
import testCep from "./endpoints/testGepCep"
import { createUser } from "./endpoints/createUser"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});



app.post ("/create", createUser)
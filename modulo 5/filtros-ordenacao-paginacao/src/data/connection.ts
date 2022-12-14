import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: "35.226.146.116",
        port: 3306,
        user: "4416993-nei-junior",
        password: "x",
        database: "jbl-4416993-nei-junior",
        multipleStatements: true
    }
}
)
import knex from "knex";

const connection = knex({
    client: "mysql",
    connection: {
        host: "35.226.146.116",
        port: 3306,
        user: "4416993-nei-junior",
        password: "yErptKQQza4gLmsDjFI6",
        database: "jbl-4416993-nei-junior",
        multipleStatements: true
    }
}
)
export default connection

import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Yostinteja20",
    port: 3306,
    database: "empresadb"
})
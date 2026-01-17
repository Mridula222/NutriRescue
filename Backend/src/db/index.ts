import { Pool } from "pg"
import "dotenv/config"

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: process.env.DB_PASSWORD,
  database: "ngohotel"
})

pool.on("connect", () => {
  console.log("Connected to PostgreSQL")
})

export default pool
import express from "express"
import cors from "cors"
import pool from "./db/index.js"
import donorController from "./controllers/donorController.js"
import userController from "./controllers/userController.js"

const app = express()

app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"], 
    credentials: true
}))

app.get('/healthy', async (_, res) =>{
        const result = await pool.query("SELECT * from users")
        res.send("DB OK")
})
app.post("/user/create", userController.createUser)

app.post("/donor/create", donorController.createDonation)
app.get("/donor/donations/:donorId", donorController.getDonorDonations)

const port = process.env.PORT || 8000
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
})


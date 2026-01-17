import express from "express"
import cors from "cors"
import pool from "./db/index.js"
import donorController from "./controllers/donorController.js"
import userController from "./controllers/userController.js"
import ngoController from "./controllers/ngoController.js"
import locationController from "./controllers/locationController.js"

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
app.get("/users", userController.getUsersByRole)


app.post("/donor/create", donorController.createDonation)
app.get("/donor/donations/:donorId", donorController.getDonorDonations)

app.get("/ngo/available-food", ngoController.getAvailableFood)
app.post("/ngo/toggle-claim", ngoController.toggleClaim)

app.get("/location/states", locationController.getStates)
app.get("/location/cities", locationController.getCities)



const port = process.env.PORT || 8000
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
})


import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"], 
    credentials: true
}))

app.get('/health', (req, res) => {
    res.send("Healthy")
    console.log("All good")
})

const port = process.env.PORT || 8000
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
})
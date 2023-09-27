import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express();

app.get("/health-check", (req, res) => {
    res.json({ message: "API IS RUNNING" })
})

app.listen(process.env.PORT, () => {
    console.log(`Application is running on ${process.env.PORT}`)
})

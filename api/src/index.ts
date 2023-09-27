import express, { Request } from "express"
import dotenv from "dotenv"
import { initConnection } from "./db/connection"
import { VehiclesModel } from "./db/models/vehicles"
import { TestModel } from "./db/models/test"
dotenv.config()
initConnection()
const app = express();

app.get("/health-check", (req, res) => {
    res.json({ message: "API IS RUNNING" })
})
app.get("/vehicles", async (req: Request, res, next) => {
    const result = await VehiclesModel.find({});
    res.json(result)
})


app.listen(process.env.PORT, () => {
    console.log(`Application is running on ${process.env.PORT}`)
})

import express, { Request } from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { initConnection } from "./db/connection"
import { VehiclesModel } from "./db/models/vehicles"

dotenv.config()
initConnection()
const app = express();
app.use(bodyParser())
app.get("/health-check", (req, res) => {
    res.json({ message: "API IS RUNNING" })
})
app.get("/vehicles", async (req: Request, res, next) => {
    const query = req.query
    const { hp, acc, weight, size = 100 } = query
    const hpCriteria = hp ? { Horsepower: { $gt: Number(hp) } } : {}
    const accCriteria = acc ? { Acceleration: { $gt: Number(acc) } } : {}
    const weightCriteria = weight ? { Weight_in_lbs: { $gt: Number(weight) } } : {}
    const limit = !isNaN(Number(size)) && Number(size) > 200 ? 100 : Number(size)
    const result = await VehiclesModel.find({ ...hpCriteria, ...accCriteria, ...weightCriteria }, { Horsepower: 1 }).limit(limit as number).sort({ Horsepower: 1 });
    res.json(result)
})

app.get("/origins", async (req: Request, res, next) => {
    const result = await VehiclesModel.aggregate([{ $group: { _id: "$Origin", count: { $sum: 1 } } }])
    res.json(result)
})

app.post("/vehicles", async (req: Request, res, next) => {
    const body = req.body
    console.log(body)
    const model = new VehiclesModel(body)
    await model.save()
    res.json({ message: body })
})




app.listen(process.env.PORT, () => {
    console.log(`Application is running on ${process.env.PORT}`)
})

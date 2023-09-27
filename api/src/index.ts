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
    const model = new VehiclesModel({
        "Name": "plymouth 'cuda 340",
        "Miles_per_Gallon": 14,
        "Cylinders": 8,
        "Displacement": 340,
        "Horsepower": 160,
        "Weight_in_lbs": 3609,
        "Acceleration": 8,
        "Year": "1970-01-01",
        "Origin": "USA"
    })
    await model.save()
    const result = await VehiclesModel.find({});

    res.json(result)
})

app.get("/test", async (req: Request, res, next) => {
    const result = new TestModel({ name: "test model4444 !!!" })
    result.save()
    const result2 = await TestModel.find({})
    res.json(result2)
})


app.listen(process.env.PORT, () => {
    console.log(`Application is running on ${process.env.PORT}`)
})

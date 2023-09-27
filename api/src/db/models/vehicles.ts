import mongoose from "mongoose"

const { Schema } = mongoose

const VehiclesSchemaModel = new Schema({
    Name: String
})

const VehiclesModel = mongoose.model("vehicles", VehiclesSchemaModel)
export { VehiclesModel }
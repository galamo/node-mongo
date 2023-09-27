import mongoose from "mongoose"

const { Schema } = mongoose

const VehiclesSchemaModel = new Schema({
    
})

const VehiclesModel = mongoose.model("vehicles", VehiclesSchemaModel)
export { VehiclesModel }
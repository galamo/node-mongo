import mongoose from "mongoose"

const { Schema } = mongoose

const TestSchemModel = new Schema({
    name: String
})

const TestModel = mongoose.model("tests", TestSchemModel)
export { TestModel }
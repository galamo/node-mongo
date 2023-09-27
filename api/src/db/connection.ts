import mongoose from "mongoose"

// mongoose.set("strictQuery", false)

const mongoDBUrl = "mongodb://localhost:27017/testSchema"

async function mainConnection() {
    await mongoose.connect(mongoDBUrl)
}

export function initConnection() {
    mainConnection().then(() => {
        console.log("DB Connected")
    }).catch(() => {
        console.log("ERROR DB not Connected")
    })
}
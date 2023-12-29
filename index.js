const express = require("express")
const mongoose = require("mongoose")
const app = express()

const User = require("./model/UserModel")

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        const conn = mongoose.connect("mongodb+srv://SophaEderson:ZTExLnHp4nzhmfEv@inventory-project.8nc7ace.mongodb.net/?retryWrites=true&w=majority");
        console.log(`MongoDB Connect: ${conn.connection.host}`);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

app.get("/", (req, res) => {
    res.json({
        data: "Hello World"
    })
})

const port = 8080
app.listen(port, () => {
    console.log("Server is running");
})
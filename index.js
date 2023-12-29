const express = require("express")
const mongoose = require("mongoose")
const app = express()

const Book = require("./model/UserModel")

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://SophaEderson:ZTExLnHp4nzhmfEv@inventory-project.8nc7ace.mongodb.net/?retryWrites=true&w=majority");
        console.log(`MongoDB Connect: ${conn.connection.host}`);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

app.get("/", (req, res) => {
    try {
        await Book.insertMany([
            {
                title: "Son of Anarchy",
                body: "Body Text"
            },
            {
                title: "Hello World Guy",
                body: "Guy"
            }
        ])
    } catch (error) {
        console.log(error)
    }
})

app.get("/add-note", async (req, res) => {
    
})

app.get("/books", async (req, res) => {
    const book = await Book.find();

    if(book){
        res.json(book)
    }else{
        res.json("Error Something")
    }
})

connectDB().then(() => {
    const port = 3000
    app.listen(port, () => {
        console.log("Server is running");
    })
})
    
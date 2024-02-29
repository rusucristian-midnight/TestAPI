const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const apiRouter = require('./routes/Router')
const PORT = process.env.PORT || 8000

const app = express()
app.use(express.json())
app.use("/api", apiRouter)

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`Server started on port - ${PORT}`))
    } catch (e){
        console.log(e)
    }
}

start()
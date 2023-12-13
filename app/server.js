require('dotenv').config()
const express = require('express')
const app = express()


console.log("Hello world")


app.get('/', async (req, res) => {
    res.send("Hello World mod one")
})

app.listen(process.env.PORT, () => {
    console.log(`Hello World Application is running on port ${process.env.PORT}`)
})

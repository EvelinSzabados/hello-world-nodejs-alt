require('dotenv').config()
const express = require('express')
const app = express()

const isNumber = /^-?\d+$/.test(process.env.NUMBER_ENV)
console.log(process.env.CUSTOM_ENV)
console.log(process.env.CUSTOM_ENV.replace(/['‘’"“”]/g, ''))
console.log(process.env.SPECIAL_ENV)
console.log(process.env.ANOTHER_SPECIAL)
console.log(process.env.NUMBER_ENV)
console.log(isNumber)

app.get('/', async (req, res) => {
    res.send("Hello World")
})

app.listen(process.env.PORT, () => {
    console.log(`Hello World Application is running on port ${process.env.PORT}`)
})

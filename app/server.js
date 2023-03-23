require('dotenv').config()
const express = require('express')
const app = express()

console.log(process.env.CUSTOM_ENV)
console.log(process.env.CUSTOM_ENV.replace(/['‘’"“”]/g, ''))
console.log(process.env.SPECIAL_ENV)
console.log(process.env.ANOTHER_SPECIAL)
console.log(process.env.NUMBER_ENV)

app.get('/', async (req, res) => {
    res.send("Hello World")
})

app.listen(process.env.PORT, () => {
    console.log(`Hello World Application is running on port ${process.env.PORT}`)
})

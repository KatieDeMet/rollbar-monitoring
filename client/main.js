const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 7777

app.use(express.json())

app.listen(port, () => console.log("Up on lucky 7!"))
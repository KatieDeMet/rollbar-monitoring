const express = require('express')
const app = express()
const path = require('path')
app.use(express.json())
const port = process.env.PORT || 7777



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/index.html'))
})

app.listen(port, () => console.log("Up on lucky 7!"))
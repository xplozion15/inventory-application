const express = require('express')
require("dotenv").config();

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Inventory app hehe <3')
})

app.listen(port, () => {
  console.log(`Inventroy app listening on port ${port}`)
})

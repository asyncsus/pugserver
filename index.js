const express = require('express')
const path = require('path')

const app = express()

let args = process.argv[0].includes('node')
  ? process.argv.slice(2)
  : process.argv.slice(1)
app.all('*', (req,res) => {
  res.render(path.join(__dirname, req.path), { req, res })
})

app.listen(args[0] || 3000)

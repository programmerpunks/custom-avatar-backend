const axios = require('axios')
const cloudinary = require('cloudinary').v2
const cors = require('cors')
require('dotenv').config()
const express = require('express')

var app = express()
app.use(express.json())
app.use(cors())

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
})

app.get('/', function (req, res) {
  cloudinary.api.resources(
    {
      type: 'upload',
      prefix: `Avatar-Assets/${req.query.part}/`,
      max_results: 100,
    },
    (error, result) => {
      res.send(error ? error : result.resources)
    },
  )
})

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})

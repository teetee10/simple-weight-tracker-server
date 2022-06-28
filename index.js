require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express')

const rootRouter = require('./routers')

const app = express()
const PORT = 3000

app.use('/api', rootRouter)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT,
    )
  else console.log("Error occurred, server can't start", error)
})
